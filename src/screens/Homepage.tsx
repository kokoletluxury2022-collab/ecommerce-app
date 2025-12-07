import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useProducts } from '../contexts/ProductContext';
import { useCart } from '../contexts/CartContext';
import { WooProduct } from '../lib/woocommerce';

type RootStackParamList = {
  Homepage: undefined;
  ProductDetails: { id: number };
};

type HomepageProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Homepage'>;
};

export const Homepage = ({ navigation }: HomepageProps) => {
  const { products, loading, categories, selectedCategory, setSelectedCategory, setSearchQuery } =
    useProducts();
  const { getCartCount } = useCart();
  const [localSearch, setLocalSearch] = useState('');

  const handleSearch = () => {
    setSearchQuery(localSearch);
  };

  const cartCount = getCartCount();

  const renderProduct = ({ item }: { item: WooProduct }) => {
    const price = parseFloat(item.price) || 0;
    const regularPrice = parseFloat(item.regular_price) || 0;
    const hasDiscount = regularPrice > price;

    return (
      <TouchableOpacity
        style={styles.productCard}
        onPress={() => navigation.navigate('ProductDetails', { id: item.id })}
      >
        <Image
          style={styles.productImage}
          source={{ uri: item.images[0]?.src || 'https://via.placeholder.com/160' }}
          resizeMode="cover"
        />
        <View style={styles.productInfo}>
          <Text style={styles.productName} numberOfLines={2}>
            {item.name}
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${price.toFixed(2)}</Text>
            {hasDiscount && (
              <Text style={styles.regularPrice}>${regularPrice.toFixed(2)}</Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.statusIcons}>
          <Image
            style={styles.signalIcon}
            source={{ uri: 'https://c.animaapp.com/miuwuy0kQowZpp/img/icon---mobile-signal.svg' }}
          />
          <Image
            style={styles.wifiIcon}
            source={{ uri: 'https://c.animaapp.com/miuwuy0kQowZpp/img/wifi.svg' }}
          />
        </View>
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>Discover</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Text style={styles.icon}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartButton}>
            <Text style={styles.icon}>🛒</Text>
            {cartCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{cartCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            value={localSearch}
            onChangeText={setLocalSearch}
            placeholder="Search for clothes..."
            placeholderTextColor="#999999"
            onSubmitEditing={handleSearch}
            returnKeyType="search"
          />
          <Text style={styles.micIcon}>🎤</Text>
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
        contentContainerStyle={styles.categoriesContent}
      >
        <TouchableOpacity
          style={[styles.categoryButton, !selectedCategory && styles.categoryButtonActive]}
          onPress={() => setSelectedCategory('')}
        >
          <Text
            style={[
              styles.categoryText,
              !selectedCategory && styles.categoryTextActive,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.id.toString() && styles.categoryButtonActive,
            ]}
            onPress={() => setSelectedCategory(category.id.toString())}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category.id.toString() && styles.categoryTextActive,
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#000000" />
        </View>
      ) : products.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No products found</Text>
        </View>
      ) : (
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.productRow}
          contentContainerStyle={styles.productsContainer}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 27,
    paddingTop: 14,
    height: 47,
  },
  time: {
    color: '#000000',
    fontSize: 17,
    fontWeight: '600',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  signalIcon: {
    width: 18,
    height: 12,
  },
  wifiIcon: {
    width: 17,
    height: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#000000',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  icon: {
    fontSize: 24,
  },
  cartButton: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#EF4444',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 16,
    gap: 8,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  searchIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
  micIcon: {
    fontSize: 20,
    marginLeft: 12,
  },
  filterButton: {
    width: 52,
    height: 52,
    backgroundColor: '#000000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    fontSize: 24,
  },
  categoriesContainer: {
    maxHeight: 44,
    marginBottom: 24,
  },
  categoriesContent: {
    paddingHorizontal: 24,
    gap: 8,
  },
  categoryButton: {
    height: 36,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryButtonActive: {
    backgroundColor: '#000000',
    borderColor: '#000000',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  categoryTextActive: {
    color: '#FFFFFF',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#7F7F7F',
  },
  productsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  productRow: {
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  productCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F2F2F2',
  },
  productImage: {
    width: '100%',
    height: 160,
    backgroundColor: '#F2F2F2',
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 8,
    height: 40,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  regularPrice: {
    fontSize: 14,
    color: '#7F7F7F',
    textDecorationLine: 'line-through',
  },
});
