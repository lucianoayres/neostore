import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Input,
  Select,
  Spacer,
  Stack,
  useBreakpointValue
} from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import React from 'react'
import { RiArrowDropDownFill } from 'react-icons/ri'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Pagination } from '../components/Pagination'
import { ProductCards } from '../components/ProductCards'
import { useFilters } from '../hooks/useFilters'
import { useProducts } from '../hooks/useProducts'
import { useSearch } from '../hooks/useSearch'
import { apiGetProducts } from '../services/apiService'
import { Product } from '../types'
import { ButtonApplyFilter } from '../components/ButtonApplyFilters'
import { ButtonClear } from '../components/ButtonClear'

interface HomeProps {
  products: Product[]
  totalProducts: number
}

export default function Home({ products, totalProducts }: HomeProps) {
  const {
    productsPerPage,
    maxAddProduct,
    page,
    setPage,
    allProducts,
    setAllProducts,
    currentPageProducts,
    productSelectQty,
    cartItems,
    subTotal,
    handleSelectProductQtyChange,
    handleAddToCart
  } = useProducts({ products, totalProducts })

  const {
    register,
    handleSubmit,
    onSubmit,
    onCloseForm,
    resetFilters,
    isOpen,
    onOpen,
    selectRating,
    handleSelectRatingChange
  } = useFilters({
    products,
    setAllProducts,
    setPage
  })

  const { search, clearSearch, handleSearchChange, filteredProducts } =
    useSearch({ allProducts, currentPageProducts })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box
      w={['100vw', '90vw']}
      maxWidth={1440}
      mt={['3', '4']}
      mx="auto"
      align="center"
      justify="center"
    >
      <Header
        search={search}
        cartItems={cartItems}
        subTotal={subTotal}
        handleSearchChange={handleSearchChange}
        clearSearch={clearSearch}
      />

      {isWideVersion && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex
            h={'64px'}
            mx={'20'}
            bgColor="gray.bgfilter"
            mt="4"
            align="center"
            justify="space-between"
          >
            <Box w="60">&nbsp;</Box>

            <HStack spacing="0.8em">
              <Input
                w={32}
                borderColor="gray.bg"
                type="number"
                step=".01"
                placeholder="€ Max"
                {...register('modalMaxValue')}
              />

              <Input
                w={32}
                borderColor="gray.bg"
                type="number"
                step=".01"
                placeholder="€ Min"
                {...register('modalMinValue')}
              />

              <Select
                {...register('modalRatingValue')}
                w={40}
                lineHeight="24px"
                icon={<RiArrowDropDownFill />}
                borderColor="gray.darker"
              >
                <option value="0">Sort by Rating</option>
                <option value="4">4 and above</option>
                <option value="3">3 and above</option>
                <option value="2">2 and above</option>
                <option value="1">1 and above</option>
              </Select>
            </HStack>

            <HStack spacing={'2em'} mr="4">
              <ButtonClear resetFilters={resetFilters} />
              <ButtonApplyFilter />
            </HStack>
          </Flex>
        </form>
      )}

      <Flex
        align="center"
        justify={['space-between', 'center']}
        mt={['2', '6']}
        mx={['4', '0']}
      >
        <Select
          w={[40, 60]}
          lineHeight="24px"
          icon={<RiArrowDropDownFill />}
          value={selectRating}
          onChange={handleSelectRatingChange}
          borderColor="gray.darker"
        >
          {selectRating === '0' ? (
            <option value="0">Sort by Rating</option>
          ) : null}
          <option value="4">4 and above</option>
          <option value="3">3 and above</option>
          <option value="2">2 and above</option>
          <option value="1">1 and above</option>
        </Select>

        {!isWideVersion && (
          <>
            <Button variant="unstyled" color="light.button" onClick={onOpen}>
              FILTERS
            </Button>

            <Drawer isOpen={isOpen} placement={'bottom'} onClose={onCloseForm}>
              <DrawerOverlay />
              <DrawerContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <DrawerCloseButton />
                  <Box mb="1em">
                    <DrawerHeader fontSize="md">FILTERS</DrawerHeader>
                  </Box>
                  <DrawerBody>
                    <Stack spacing="1.8em">
                      <Stack spacing="1.1em">
                        <Input
                          w={32}
                          borderColor="gray.darker"
                          type="number"
                          step=".01"
                          placeholder="€ Max"
                          {...register('modalMaxValue')}
                        />

                        <Input
                          w={32}
                          borderColor="gray.darker"
                          type="number"
                          step=".01"
                          placeholder="€ Min"
                          {...register('modalMinValue')}
                        />
                      </Stack>
                      <Select
                        {...register('modalRatingValue')}
                        w={40}
                        lineHeight="24px"
                        icon={<RiArrowDropDownFill />}
                        borderColor="gray.darker"
                      >
                        <option value="0">Sort by Rating</option>
                        <option value="4">4 and above</option>
                        <option value="3">3 and above</option>
                        <option value="2">2 and above</option>
                        <option value="1">1 and above</option>
                      </Select>
                    </Stack>
                    <Spacer h={'6em'} />
                  </DrawerBody>

                  <DrawerFooter>
                    <HStack spacing={'2em'}>
                      <ButtonClear resetFilters={resetFilters} />
                      <Spacer />
                      <ButtonApplyFilter />
                    </HStack>
                  </DrawerFooter>
                </form>
              </DrawerContent>
            </Drawer>
          </>
        )}
      </Flex>

      <ProductCards
        filteredProducts={filteredProducts}
        allProducts={allProducts}
        productSelectQty={productSelectQty}
        maxAddProduct={maxAddProduct}
        handleSelectProductQtyChange={handleSelectProductQtyChange}
        handleAddToCart={handleAddToCart}
      />

      <Flex align="center" justify="center" mt={['0', '4']} mb={['6', '16']}>
        <Pagination
          totalCountOfRegisters={
            filteredProducts.length !== currentPageProducts.length
              ? filteredProducts.length
              : allProducts.length
          }
          registersPerPage={productsPerPage}
          currentPage={page}
          onPageChange={setPage}
        />
      </Flex>

      <Footer itemsInCart={cartItems.length} subTotal={subTotal} />
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await apiGetProducts()

  const {
    allProducts: products,
    _allProductsMeta: { count: totalProducts }
  } = response.data

  return {
    props: {
      products,
      totalProducts
    },
    revalidate: 60 * 60 * 24 // 24h
  }
}
