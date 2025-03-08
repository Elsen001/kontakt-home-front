import { addWarranty } from '@/redux/reducers/AddToCartReducer';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import "./warranty.scss"
import { LiaTimesSolid } from 'react-icons/lia';

interface ProductWarrantyModalProps {
    productId: number; 
    onClose: () => void; 
}

const ProductWarrantyModal: React.FC<ProductWarrantyModalProps> = ({ productId, onClose }) => {
    const dispatch = useDispatch();
    const [selectedWarranty, setSelectedWarranty] = useState(0);

    const handleAddWarranty = () => {
        if (selectedWarranty !== 0) {
            dispatch(addWarranty({ id: productId, warrantyAmount: selectedWarranty }));
            onClose();
        }
    };

    return (
        <div className="modal-warranty">
            <div className="modal-container">
                <div className="wr-title">
                    <h3>Zəmanət</h3>
                    <LiaTimesSolid className='wr-icon' onClick={onClose} />
                </div>
                <div className="wr-content">
                    <div>
                        <input type="radio" id="zemanet1" name="zemanet" value="78" onChange={() => setSelectedWarranty(78)} />
                        <label htmlFor="zemanet1"><span>Zəmanət + 1 il</span><span>78 ₼</span></label>
                    </div>
                    <div>
                        <input type="radio" id="zemanet2" name="zemanet" value="130" onChange={() => setSelectedWarranty(130)} />
                        <label htmlFor="zemanet2"><span>Zəmanət + 2 il </span><span>130 ₼</span></label>
                    </div>
                    <div>
                        <input type="radio" id="zemanet3" name="zemanet" value="182" onChange={() => setSelectedWarranty(182)} />
                        <label htmlFor="zemanet3"><span>Zəmanət + 3 il</span> <span>182 ₼</span></label>
                    </div>
                    <div>
                        <input type="radio" id="zemanet4" name="zemanet" value="91" onChange={() => setSelectedWarranty(91)} />
                        <label htmlFor="zemanet4"><span>EXTRA DƏYİŞDİRİLMƏ ZƏMANƏTİ 1 İL</span> <span>91 ₼</span></label>
                    </div>
                    <div>
                        <input type="radio" id="zemanet5" name="zemanet" value="195" onChange={() => setSelectedWarranty(195)} />
                        <label htmlFor="zemanet5"><span>QIZIL ZƏMANƏT ULTRA 1 İL (KONTAKT)</span> <span>195 ₼</span></label>
                    </div>
                    <div>
                        <input type="radio" id="zemanet6" name="zemanet" value="260" onChange={() => setSelectedWarranty(260)} />
                        <label htmlFor="zemanet6"><span>QIZIL ZƏMANƏT ULTRA 2 İL (KONTAKT)</span> <span>260 ₼</span></label>
                    </div>
                    <div>
                        <input type="radio" id="zemanet7" name="zemanet" value="325" onChange={() => setSelectedWarranty(325)} />
                        <label htmlFor="zemanet7"><span>QIZIL ZƏMANƏT ULTRA 3 İL (KONTAKT)</span> <span>325 ₼</span></label>
                    </div>
                    <div>
                        <input type="radio" id="zemanet8" name="zemanet" value="130" onChange={() => setSelectedWarranty(130)} />
                        <label htmlFor="zemanet8"><span>QIZIL ZƏMANƏT ULTRA 6 AY (KONTAKT)</span> <span>130 ₼</span></label>
                    </div>
                    <div>
                        <input type="radio" id="zemanet9" name="zemanet" value="195" onChange={() => setSelectedWarranty(195)} />
                        <label htmlFor="zemanet9"><span>QIZIL ZƏMANƏT ULTRA 2 İL (İPHONE ABUNƏLİYİ)</span> <span>195 ₼</span></label>
                    </div>
                </div>
                <div className="wr-footer">
                    <button
                        className={selectedWarranty === 0 ? "active-wr-bnt" : ""}
                        disabled={selectedWarranty === 0}
                        onClick={handleAddWarranty}
                    >
                        Əlavə etmək
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductWarrantyModal;

