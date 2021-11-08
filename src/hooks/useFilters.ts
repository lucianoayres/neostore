import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Product } from '../types/index'
import { helperNotify } from '../helpers/helperNotify'

interface useFilterProps {
  products: Product[]
  setAllProducts: (products: Product[]) => void
  setPage: (page: number) => void
}

export function useFilters({
  products = [],
  setAllProducts,
  setPage
}: useFilterProps) {
  const maxValueFilterLimit = 9999999
  const [selectRating, setSelectRating] = useState('0')

  // Chakra-UI Drawer
  const { isOpen, onOpen, onClose } = useDisclosure()
  // End of Chakra-UI Drawer

  // react-hook-form
  type Inputs = {
    modalMaxValue: number
    modalMinValue: number
    modalRatingValue: string
  }

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors }
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    let {
      modalMaxValue: maxValue,
      modalMinValue: minValue,
      modalRatingValue: ratingValue
    } = data

    let hasAutoSetMaxValue = false

    if (maxValue && typeof maxValue === 'string') {
      maxValue = parseFloat(maxValue)
    } else {
      maxValue = maxValueFilterLimit
      hasAutoSetMaxValue = true
    }

    if (minValue && typeof minValue === 'string') {
      minValue = parseFloat(minValue)
    } else {
      minValue = 1
    }

    if (maxValue < 1 || minValue < 1) {
      reset({ modalMaxValue: undefined, modalMinValue: undefined })
      helperNotify(
        'error',
        'Invalid value! Max and Min value must be 1 or greater.',
        'error-message-invalid-value-greater-than-one',
        5000
      )
      return
    }

    if (maxValue < minValue) {
      reset({ modalMaxValue: undefined, modalMinValue: undefined })

      helperNotify(
        'error',
        'Max value must be greater than Min.',
        'error-message-invalid-value-max-greater-than-min',
        5000
      )
      return
    }

    if (hasAutoSetMaxValue && !minValue && ratingValue === '0') {
      helperNotify(
        'error',
        'Inform at least 1 field to filter.',
        'error-message-at-least-1-field-required',
        5000
      )
      return
    }

    if ((maxValue && minValue) || ratingValue) {
      applyFilters(maxValue, minValue, ratingValue)
    } else {
      setAllProducts([...products])
    }

    setSelectRating(ratingValue)

    onClose()
  }

  function onCloseForm() {
    onClose()
  }

  function resetFilters() {
    setSelectRating('0')
    setAllProducts([...products])
    reset()
  }
  // end of react-hook-form

  function applyFilters(max = 0, min = 0, rating = '0') {
    let newAllProducts = [...products]
    console.log(max)
    console.log(min)
    if (max) {
      console.log(max)
      newAllProducts = newAllProducts
        .filter((item) => item.price >= min && item.price <= max)
        .sort((a, b) => b.price - a.price)
    }
    setAllProducts(newAllProducts)
    if (rating !== '0') {
      newAllProducts = newAllProducts
        .filter((item) => item.rating >= parseInt(rating))
        .sort((a, b) => b.rating - a.rating)

      setAllProducts(newAllProducts)
    }
    setPage(1)
  }

  function handleSelectRatingChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    const ratingValue = event.target.value

    setSelectRating(ratingValue)
    setValue('modalRatingValue', ratingValue, { shouldValidate: true })

    let maxValue = watch('modalMaxValue')
    let minValue = watch('modalMinValue')

    if (typeof maxValue === 'string') {
      maxValue = parseFloat(maxValue)
    } else {
      maxValue = 0
    }

    if (typeof minValue === 'string') {
      minValue = parseFloat(minValue)
    } else {
      minValue = 0
    }

    applyFilters(maxValue, minValue, ratingValue)
  }

  return {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    onSubmit,
    onCloseForm,
    resetFilters,
    applyFilters,
    isOpen,
    onOpen,
    selectRating,
    setSelectRating,
    handleSelectRatingChange
  }
}
