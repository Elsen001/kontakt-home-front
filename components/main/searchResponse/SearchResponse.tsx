import SearchSkeleton from "@/components/ProductSkeleton/SearchSkeleton";
import "./style.scss"
import { getCategoryItems } from '@/redux/reducers/CategoryReducer';
import { AppDispatch, RootState } from '@/redux/store/store';
import { OfferItems } from "@/types/types";
import Link from "next/link";
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

interface CollectionProps {
    allCollection: any
    keyword: string
    loading:any
}

const SearchResponse: React.FC<CollectionProps> = ({ allCollection, keyword,loading }) => {
    const dispatch = useDispatch<AppDispatch>();
    const categoryItems = useSelector((state: RootState) => state.categoryItems.categoryItems);



    useEffect(() => {
        if (categoryItems.length === 0) {
            dispatch(getCategoryItems());
        }
    }, [dispatch, categoryItems]);

    return (
        <div className='search-items'>
            <div className="popular-category">
                <div className="title">Populyar Kategoriyalar</div>
                <div className="links">
                    {
                        categoryItems?.slice(2, 7).map((item) => (
                            <Link key={item.id} href={"/"}>{item.name}</Link>
                        )
                        )}
                </div>
                <div className="title">Populyar Brendlər</div>
                <div className="links">
                    <Link href={"/"}>Apple</Link>
                    <Link href={"/"}>Hoffmann</Link>
                    <Link href={"/"}>Toshiba</Link>

                </div>
                <div className="title">Populyar Axtarışlar</div>
                <div className="links">
                    <Link href={"/"}>Apple</Link>
                    <Link href={"/"}>Hoffmann</Link>
                    <Link href={"/"}>Toshiba</Link>

                </div>
            </div>
            <div className="popular-products">
                <div className="title">Populyar Axtarışlar</div>

                <div className="products">
                    { loading? <SearchSkeleton/>:  keyword.length > 0 ? (
                        Object.keys(allCollection).map((collectionName) => (
                            <div key={collectionName} className="card">
                                {  allCollection[collectionName]?.data?.slice(0, 2).map((item: OfferItems) => (
                                    <Link key={item.id} href={`/item/${item.id}`}>
                                        <div className="product">
                                            <img src={item.image} alt={item.name} />
                                            <div className="product-details">
                                                <div className="title-product">{item.name}</div>
                                                <div className="price">
                                                    <div className="price">{item.price}₼</div>
                                                    {item.oldPrice && <div className="old-price">{item.oldPrice}₼</div>}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ))
                    ) : (
                        <>
                            <div className="card">
                                {allCollection.products?.slice(0, 2).map((item: OfferItems) => (
                                    <Link key={item.id} href={`/item/${item.id}`}>
                                        <div className="product">
                                            <img src={item.image} alt="" />
                                            <div className="product-details">
                                                <div className="title-product">{item.name}</div>
                                                <div className="price">
                                                    <div className="price">{item.price}₼</div>
                                                    {item.oldPrice && <div className="old-price">{item.oldPrice}₼</div>}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <div className="card">
                                {allCollection.tv?.slice(0, 2).map((item: OfferItems) => (
                                    <Link key={item.id} href={`/item/${item.id}`}>
                                        <div className="product">
                                            <img src={item.image} alt="" />
                                            <div className="product-details">
                                                <div className="title-product">{item.name}</div>
                                                <div className="price">
                                                    <div className="price">{item.price}₼</div>
                                                    {item.oldPrice && <div className="old-price">{item.oldPrice}₼</div>}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <div className="card">
                                {allCollection.offer?.slice(0, 2).map((item: OfferItems) => (
                                    <Link key={item.id} href={`/item/${item.id}`}>
                                        <div className="product">
                                            <img src={item.image} alt="" />
                                            <div className="product-details">
                                                <div className="title-product">{item.name}</div>
                                                <div className="price">
                                                    <div className="price">{item.price}₼</div>
                                                    {item.oldPrice && <div className="old-price">{item.oldPrice}₼</div>}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="card">
                                {allCollection.offer?.slice(4, 6).map((item: OfferItems) => (
                                    <Link key={item.id} href={`/item/${item.id}`}>
                                        <div className="product">
                                            <img src={item.image} alt="" />
                                            <div className="product-details">
                                                <div className="title-product">{item.name}</div>
                                                <div className="price">
                                                    <div className="price">{item.price}₼</div>
                                                    {item.oldPrice && <div className="old-price">{item.oldPrice}₼</div>}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}
                </div>

            </div>
        </div>
    )
}

export default SearchResponse
