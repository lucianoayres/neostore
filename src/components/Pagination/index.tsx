import { Stack, Button, Box, Text } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

export interface PaginationProps {
  totalCountOfRegisters: number
  registersPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter((page) => page > 0)
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 3,
  currentPage = 1,
  onPageChange
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage)

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : []

  if (totalCountOfRegisters > 0) {
    return (
      <Stack
        direction={['column', 'row']}
        spacing="6"
        mt="8"
        justify="space-between"
        align="center"
      >
        <Stack direction="row" spacing="2">
          {currentPage > 1 + siblingsCount && (
            <>
              <PaginationItem number={1} onPageChange={onPageChange} />
              {currentPage > 2 + siblingsCount && (
                <Text color="gray.300" width="4" textAlign="center">
                  ...
                </Text>
              )}
            </>
          )}

          {previousPages.length > 0 &&
            previousPages.map((page) => {
              return (
                <PaginationItem
                  key={page}
                  onPageChange={onPageChange}
                  number={page}
                />
              )
            })}

          <PaginationItem
            number={currentPage}
            isCurrent
            onPageChange={onPageChange}
          />

          {nextPages.length > 0 &&
            nextPages.map((page) => {
              return (
                <PaginationItem
                  key={page}
                  number={page}
                  onPageChange={onPageChange}
                />
              )
            })}

          {currentPage + siblingsCount < lastPage && (
            <>
              {currentPage + 1 + siblingsCount < lastPage && (
                <Text color="gray.300" width="4" textAlign="center">
                  ...
                </Text>
              )}
              <PaginationItem number={lastPage} onPageChange={onPageChange} />
            </>
          )}
        </Stack>
      </Stack>
    )
  }
  return null
}
