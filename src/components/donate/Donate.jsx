import React, { useState } from 'react'
import './Donate.css'
import donateImage from '../../assets/donateImage.jpg'
import { HiOutlineClipboard, HiOutlineClipboardCheck } from 'react-icons/hi'



const Donate = () => {
const moneyBreakdown = [
  { percent: 87, width: '100%', label: 'Direct program delivery' },
  { percent: 9, width: '35%', label: 'Local staff & operations' },
  { percent: 4, width: '15%', label: 'Reporting & compliance' },
]

const bankFields = [
  { label: 'Account name', value: 'Deon Ellison Foundation' },
  { label: 'Account number', value: '4471 8823 9900 1142' },
  { label: 'Routing number', value: '021 000 021' },
  { label: 'Account type', value: 'Checking' },
  { label: 'SWIFT / BIC', value: 'FCBKUS33XXX' },
  { label: 'Reference', value: 'DONATION – [your name]' },
]

const [copiedField, setCopiedField] = useState(null)

  const handleCopy = (value, label) => {
    navigator.clipboard.writeText(value)
    setCopiedField(label)
    setTimeout(() => setCopiedField(null), 1500)
  }
  return (
    <div className="Donate">
      <div className="donate-content">

        {/* Left column */}
        <div className="donate-text">
          <span className="donate-badge">
            <span className="badge-line"></span>
            Give · Bank Transfer
          </span>

          <h1 className="donate-title">
            <span className="line1">Every transfer</span>
            <span className="line2 highlight">lands directly.</span>
          </h1>

          <p className="donate-subtitle">
            We accept bank transfers in ZAR. 100% of your gift
            reaches programmes we cover, all transfer fees on our end. No
            third-party processor, no platform cut.
          </p>
        </div>

        {/* Right column */}
        <div className="donate-image">
          <img src={donateImage} alt="Children we work with" />

          <div className="money-card">
            <span className="money-card-title">Where your money goes</span>

            <div className="money-rows">
              {moneyBreakdown.map((row) => (
                <div className="money-row" key={row.label}>
                  <span className="money-percent">{row.percent}%</span>
                  <div className="money-bar-track">
                    <div
                      className="money-bar-fill"
                      style={{ width: row.width }}
                    ></div>
                  </div>
                  <span className="money-label">{row.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    <div className="bank-details">
    <div className="bank-details-content">
      <span className="donate-badge">
      <span className="badge-line"></span>
        bank details
      </span> 

      <p className="bank-details-subtitle">
        To support our initiatives directly, secure electronic funds transfers (EFT) can be made to our 
        verified organizational banking account listed below. For corporate sponsors requiring a Section  
        18A tax deductible receipt or full compliance reporting for your CSI records, please email your proof
        of payment along with your company details to our administration office. To help us allocate your funds
        accurately, please use the name of your chosen program as your payment reference.
     </p>

      <div className="bank-card">
      <div className="bank-card-header">
        <div className="bank-header-text">
          <span className="bank-country-eyebrow">Northern Cape</span>
          <h3 className="bank-name">Standard Bank</h3>
          <p className="bank-address"> Douglas Sentrum, 16 Loch St, Douglas, 8730</p>
        </div>
        <span className="bank-flag">RSA</span>
      </div>

      <div className="bank-fields">
        {bankFields.map((field) => (
          <div className="bank-field-row" key={field.label}>
            <span className="bank-field-label">{field.label}</span>
            <span className="bank-field-value">{field.value}</span>
            <button
              className="copy-btn"
              onClick={() => handleCopy(field.value, field.label)}
              aria-label={`Copy ${field.label}`}
            >
              {copiedField === field.label ? (
                <HiOutlineClipboardCheck />
              ) : (
                <HiOutlineClipboard />
              )}
            </button>
          </div>
        ))}
      </div>

      <div className="bank-card-footer">
        <strong>Important:</strong> Always include your full name in the
        reference field. We will send a tax receipt to your registered email
        within 3 business days of receiving your transfer.
      </div>
    </div>

    </div>
    </div>

    </div>
  )
}

export default Donate