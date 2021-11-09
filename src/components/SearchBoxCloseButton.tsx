import { RiCloseCircleFill, RiSearchLine } from 'react-icons/ri'
import { Icon } from '@chakra-ui/react'

interface SearchBoxCloseButtonProps {
  isSearching: boolean
  onClose: () => void
}

export function SearchBoxCloseButton({
  onClose,
  isSearching = false
}: SearchBoxCloseButtonProps) {
  if (isSearching) {
    return (
      <Icon
        as={RiCloseCircleFill}
        fontSize="20"
        color="gray.500"
        onClick={onClose}
      />
    )
  } else {
    return <Icon as={RiSearchLine} fontSize="20" color="gray.500" />
  }
}
