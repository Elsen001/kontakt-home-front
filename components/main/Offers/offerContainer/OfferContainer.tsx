"use client"
import React, { useEffect } from 'react'
import SalesLeaders from '../Sales/SalesLeaders'
import SpecialOffer from '../SpecialOffer/SpecialOffer'
import SeasonalOffer from '../seasonalOffers/SeasonalOffer'
import DelightfulSuggestions from '../DelightfulSuggestions/DelightfulSuggestions'
import { getproductOffer, selectproductOffer } from '@/redux/reducers/ProductOfferReducer'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@/redux/store/store'
import SuperOffer from '../SuperOffer/SuperOffer'
import { getSuperOffer, selectSuperOffer } from '@/redux/reducers/SuperOfferReducer'
import { getTvOffer, selectTvOffer } from '@/redux/reducers/TvReducer'

const OfferContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const productOffer = useSelector(selectproductOffer);
  const superOffer = useSelector(selectSuperOffer)
  const tvOffer = useSelector(selectTvOffer)

  useEffect(() => {

    if (superOffer.length === 0) {
      dispatch(getSuperOffer());
    }
  }, [dispatch, superOffer]);

  useEffect(() => {

    if (tvOffer.length === 0) {
      dispatch(getTvOffer());
    }
  }, [dispatch, tvOffer]);


  useEffect(() => {

    if (productOffer.length === 0) {
      dispatch(getproductOffer());
    }
  }, [dispatch, productOffer]);

  return (
    <div>
      <SalesLeaders productOfferItems={productOffer} />
      <SuperOffer productOfferItems={superOffer} />
      <SpecialOffer productOfferItems={tvOffer} />
      <DelightfulSuggestions productOfferItems={productOffer} />
      <SeasonalOffer productOfferItems={productOffer} />
    </div>
  )
}

export default OfferContainer
