import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
  number: number
  isCurrent?: boolean
  onPageChange: (page: number) => void
}
export function PaginationItem({
  isCurrent = false,
  onPageChange,
  number
}: PaginationItemProps) {
  function handlePageChange(event: React.MouseEvent<HTMLElement>) {
    const clickedButton = event.currentTarget as HTMLButtonElement
  }

  if (isCurrent) {
    return (
      <Button
        borderRadius="full"
        size="sm"
        fontSize="sm"
        width="3"
        color="light.title"
        disabled
        _disabled={{
          bg: 'light.button',
          bgColor: 'light.button',
          cursor: 'default'
        }}
        _hover={{
          bgColor: 'light.button'
        }}
      >
        {number}
      </Button>
    )
  }
  return (
    <Button
      borderRadius="full"
      size="sm"
      fontSize="sm"
      width="3"
      color="gray.500"
      borderColor="gray.100"
      _hover={{
        color: 'light.title',
        bg: 'light.border'
      }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  )
}
