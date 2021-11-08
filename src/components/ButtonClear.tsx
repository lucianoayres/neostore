import { Button } from '@chakra-ui/react'
import React from 'react'

interface ButtonClearProps {
  resetFilters: () => void
}

export function ButtonClear({ resetFilters }: ButtonClearProps) {
  return (
    <Button textColor="light.button" variant="unstyled" onClick={resetFilters}>
      Clear
    </Button>
  )
}
