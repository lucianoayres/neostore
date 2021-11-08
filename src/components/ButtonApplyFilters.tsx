import { Button } from '@chakra-ui/react'
import React from 'react'

export function ButtonApplyFilter() {
  return (
    <Button
      w={40}
      type="submit"
      color="light.button"
      borderColor="light.border"
      variant="outline"
    >
      Apply Filters
    </Button>
  )
}
