import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Select,
  SimpleGrid,
  Text,
  useBreakpointValue
} from '@chakra-ui/react'
import React from 'react'
import { RiArrowDropDownFill, RiStarFill, RiStarLine } from 'react-icons/ri'
import Rating from 'react-rating'
import { helperTruncate } from '../helpers/helperTruncate'
import { Product } from '../types'

export interface ProductCardsProps {
  filteredProducts: Product[]
  allProducts: Product[]
  productSelectQty: number[]
  maxAddProduct: number
  handleSelectProductQtyChange: (
    event: React.ChangeEvent<HTMLSelectElement>,
    productIndex: number
  ) => void
  handleAddToCart: (
    event: React.MouseEvent<HTMLElement>,
    selectedProduct: Product,
    productIndex: number
  ) => void
}

export function ProductCards({
  filteredProducts = [],
  allProducts = [],
  productSelectQty = [],
  maxAddProduct = 0,
  handleSelectProductQtyChange,
  handleAddToCart
}: ProductCardsProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <>
      {filteredProducts.length ? (
        <SimpleGrid
          columns={[2, 3]}
          columnGap={['0.4rem', '1.2rem']}
          rowGap={['0.4rem', '1.2rem']}
          mt={['1.4rem', '1.6rem']}
          maxWidth={1440}
          w={['96vw', '50vw']}
        >
          {filteredProducts.map((product, index) => {
            const productIndex = allProducts.findIndex(
              (item) => item.id === product.id
            )
            return (
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                key={product.id}
              >
                <Image src={product.image.url} alt={product.title} />

                <Box mx={['2', '4']}>
                  <Grid templateColumns="repeat(1, 1fr)" gap={2}>
                    <Flex w="100%" h="20" align="top" mt="3">
                      <Box mt="1" as="h4" lineHeight="tight" textAlign="left">
                        {isWideVersion
                          ? helperTruncate(product.title, 64)
                          : helperTruncate(product.title, 46)}
                      </Box>
                    </Flex>
                  </Grid>

                  <Box display="flex" mt="2" align="center" justify="center">
                    <Rating
                      initialRating={product.rating}
                      readonly
                      emptySymbol={<RiStarLine color="FB8200" size="1em" />}
                      fullSymbol={<RiStarFill color="FB8200" size="1em" />}
                    />
                    <Box
                      as="span"
                      ml="2"
                      color="gray.600"
                      fontSize={['medium', 'sm']}
                    >
                      {product.rating}
                    </Box>
                  </Box>
                  <Box mt="3" mb="6" mr="2">
                    <Flex align="center" justify="space-between">
                      <Box>
                        <Text
                          fontWeight="semibold"
                          as="h3"
                          fontSize={['1em', '1.3em']}
                          lineHeight="tight"
                          isTruncated
                        >
                          ${product.price}
                        </Text>
                      </Box>
                      <Box>
                        <Select
                          w={[16, 20]}
                          fontSize="sm"
                          textAlign="left"
                          icon={<RiArrowDropDownFill />}
                          value={productSelectQty[productIndex]}
                          onChange={(e) =>
                            handleSelectProductQtyChange(e, productIndex)
                          }
                        >
                          {Array(maxAddProduct)
                            .fill('')
                            .map((e, i) => i + 1)
                            .map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                        </Select>
                      </Box>
                    </Flex>
                  </Box>

                  <Button
                    w="100%"
                    mb="3"
                    color="light.button"
                    borderColor="light.border"
                    variant="outline"
                    onClick={(evt) =>
                      handleAddToCart(evt, product, productIndex)
                    }
                    _disabled={{ fontColor: 'light.buttonDisabled' }}
                    _hover={{
                      bgColor: 'light.bg'
                    }}
                  >
                    Add to cart
                  </Button>
                </Box>
              </Box>
            )
          })}
        </SimpleGrid>
      ) : (
        <Flex justify="center" mt={8}>
          <Text>Sorry, product not found.</Text>
        </Flex>
      )}
    </>
  )
}
