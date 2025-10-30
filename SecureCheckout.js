import React, { useState, useEffect } from 'react';
import './SecureCheckout.css';

const SecureCheckout = () => {
  const [csrfToken, setCsrfToken] = useState('');
  const [formData, setFormData] = useState({
    shipping_address: 'Hsnfjsfksnsresrsd',
    shipping_address2: 'Vsenn rnsjks thrkjction',
    city: '',
    zip_code: '',
    country: '',
    card_number: '',
    expiry_date: '',
    cvv: '',
    card_holder: ''
  });

  // Récupération du token CSRF
  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await fetch('/api/csrf-token.php');
        const data = await response.json();
        setCsrfToken(data.token);
      } catch (error) {
        console.error('Error fetching CSRF token:', error);
      }
    };
    fetchCsrfToken();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation côté client
    if (!formData.shipping_address || !formData.city || !formData.zip_code || !formData.cvv) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    // Soumission du formulaire
    e.target.submit();
  };

  const orderItems = [
    {
      id: 1,
      name: "Black Designer T-shirt",
      quantity: "x1",
      price: 89.99,
      image: "tshirt-icon.png",
    },
    {
      id: 2,
      name: "Dark Wash Slim-fit Jeans",
      quantity: "x1",
      price: 109.99,
      image: "jeans-icon.png",
    },
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0);
  const taxes = subtotal * 0.05; 
  const total = subtotal + taxes;

  return (
    <div className="secure-checkout-container">
      <div className="secure-checkout-box">
        <h1 className="main-title">Secure Checkout</h1>

        <form 
          method="POST" 
          action="/api/process-checkout.php" 
          onSubmit={handleSubmit}
          className="checkout-form-container"
        >
          {/*ces t le CSRF caché */}
          <input type="hidden" name="csrf_token" value={csrfToken} />
          
          {/* Items de commande cachés */}
          {orderItems.map(item => (
            <input 
              key={item.id}
              type="hidden" 
              name="items[]" 
              value={JSON.stringify(item)}
            />
          ))}

          <div className="checkout-content">
            <div className="checkout-form">
              {/*  Shipping Information */}
              <div className="form-section">
                <h2 className="section-title"> Shipping Information</h2>
                
                <label htmlFor="shipping_address">Address Line 1 </label>
                <input 
                  type="text" 
                  id="shipping_address" 
                  name="shipping_address" 
                  value={formData.shipping_address}
                  onChange={handleInputChange}
                  className="input-field" 
                  required 
                />
                <p className="forgot-link">Where you live (street/apt/etc)</p>

                <label htmlFor="shipping_address2">Address Line 2</label>
                <input 
                  type="text" 
                  id="shipping_address2" 
                  name="shipping_address2" 
                  value={formData.shipping_address2}
                  onChange={handleInputChange}
                  className="input-field" 
                />

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City </label>
                    <input 
                      type="text" 
                      id="city" 
                      name="city" 
                      value={formData.city}
                      onChange={handleInputChange}
                      className="input-field" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="zip_code">ZIP Code </label>
                    <input 
                      type="text" 
                      id="zip_code" 
                      name="zip_code" 
                      value={formData.zip_code}
                      onChange={handleInputChange}
                      className="input-field" 
                      required 
                    />
                  </div>
                </div>

                <label htmlFor="country">Country </label>
                <select 
                  id="country" 
                  name="country" 
                  value={formData.country}
                  onChange={handleInputChange}
                  className="input-field" 
                  required
                >{/* a voir si je laisse ou je supprime plus tard */}
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Cameroon</option>
                  <option value="UK">United Kingdom</option>
                  <option value="FR">France</option>
                </select>
              </div>

              {/* Payment Method */}
              <div className="form-section payment-section">
                <h2 className="section-title"> Payment Method</h2>
                <div className="payment-method-row">
                  <div className="card-image-lock">
                    <div className="card-placeholder">
                      <p>007</p>
                    </div>
                    <span className="lock-icon">🔒</span>
                  </div>

                  <div className="card-details">
                    <div className="card-number-row">
                      <input 
                        type="password" 
                        defaultValue="••••" 
                        className="card-input small" 
                        readOnly 
                      />
                      <input 
                        type="password" 
                        defaultValue="••••" 
                        className="card-input small" 
                        readOnly 
                      />
                      <input 
                        type="password" 
                        defaultValue="••••" 
                        className="card-input small" 
                        readOnly 
                      />
                      <input 
                        type="text" 
                        defaultValue="4567" 
                        className="card-input small" 
                        readOnly 
                      />
                      <button type="button" className="change-btn">Change</button>
                      <span className="lock-icon-small">🔒</span>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="card_holder">Card Holder Name *</label>
                        <input 
                          type="text" 
                          id="card_holder" 
                          name="card_holder" 
                          value={formData.card_holder}
                          onChange={handleInputChange}
                          className="input-field" 
                          required 
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="expiry_date">Expiry Date </label>
                        <input 
                          type="text" 
                          id="expiry_date" 
                          name="expiry_date" 
                          placeholder="MM/YY"
                          value={formData.expiry_date}
                          onChange={handleInputChange}
                          className="input-field" 
                          required 
                        />
                      </div>
                    </div>

                    <div className="cvv-row">
                      <div className="form-group">
                        <label htmlFor="cvv">CVV </label>
                        <input 
                          type="text" 
                          id="cvv" 
                          name="cvv" 
                          placeholder="CVV" 
                          value={formData.cvv}
                          onChange={handleInputChange}
                          className="cvv-input" 
                          required 
                          maxLength="4"
                        />
                      </div>
                      <div className="card-logos">
                        <span className="card-logo">VISA</span>
                        <span className="card-logo">MC</span>
                        <span className="paypal-text">
                          <small>PAYPAL</small>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="lock-icon-bottom">🔒</span>
              </div>
            </div>

            {/*  Order Summary */}
            <div className="order-summary">
              <h2 className="section-title"> Order Summary</h2>
              <div className="order-items-list">
                {orderItems.map((item) => (
                  <div key={item.id} className="order-item">
                    <div className="item-details">
                      <div className="item-image-placeholder">
                        {item.name.includes("T-shirt") ? "👕" : "👖"}
                      </div>
                      <span>{item.name}</span>
                    </div>
                    <span className="item-quantity">{item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="summary-details">
                <div className="summary-line">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-line">
                  <span>Taxes (5%):</span>
                  <span>${taxes.toFixed(2)}</span>
                </div>
                <div className="summary-line">
                  <span>Shipping:</span>
                  <span className="free-shipping">FREE</span>
                </div>
              </div>

              <div className="total-line">
                <span className="total-text">TOTAL:</span>
                <span className="total-amount">${total.toFixed(2)}</span>
              </div>

              <button type="submit" className="place-order-btn">
                PLACE YOUR SECURE ORDER
              </button>
              <p className="terms-text">
                By clicking "Place Your Secure Order" you agree to our Terms & Conditions.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SecureCheckout;