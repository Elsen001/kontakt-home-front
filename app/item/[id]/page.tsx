"use client"
import React, { useEffect, useState } from 'react';
import ProductHead from './components/ProductHead';
import "./style/style.scss";
import RouteWay from '@/components/routeWay/RouteWay';
import Features from './components/Features';
import Comment from './components/Comment';
import ProductDescription from './components/ProductDescription';
import { useDispatch, useSelector } from 'react-redux';
import { getItemById, selectError, selectIsLoading, selectItem } from '@/redux/reducers/DetailsReducer';
import { AppDispatch } from '@/redux/store/store';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { OfferItems } from '@/types/types';
import { addToCart } from '@/redux/reducers/AddToCartReducer';

interface CommentType {
  _id?: string;
  productId: string;
  userName: string;
  commentText: string;
  starRating: number;
  createdAt: string;
}


const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const item = useSelector(selectItem);
  const [averageRating, setAverageRating] = useState(0);
  const [comments, setComments] = useState<CommentType[]>([]);

  const isLoading = useSelector(selectIsLoading);
  const params = useParams();
  const id = params.id as string;



  const calculateAverageRating = (comments: CommentType[]) => {
    if (comments.length === 0) {
      setAverageRating(0);
      return;
    }
    const totalRating = comments.reduce((sum, comment) => sum + comment.starRating, 0);
    setAverageRating(parseFloat((totalRating / comments.length).toFixed(1)));
  };

  const fetchComments = async () => {
    try {
      const response = await axios.get(`https://kontakt-back-2.onrender.com/api/comments/${id}`);
      setComments(response.data.data);
      calculateAverageRating(response.data.data);
    } catch (error) {
      console.error("Şərhlər yüklənərkən xəta:", error);
    }
  };



  useEffect(() => {
    if (id) {
      dispatch(getItemById({ id }));
    }
  }, [id, dispatch]);



  return (
    <>
      <RouteWay name={item.name} />
      <div className='details'>
        <ProductHead  isLoading={isLoading}  comments={comments} averageRating={averageRating} item={item} />
        <Features item={item} />
        <Comment comments={comments} fetchComments={fetchComments} averageRating={averageRating} calculateAverageRating={calculateAverageRating} productId={id} />
      </div>
    </>
  );
}

export default Page;
