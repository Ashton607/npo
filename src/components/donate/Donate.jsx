import React, { useState } from 'react'
import './Donate.css'
import donateImage from '../../assets/donateImage.jpg'
import { HiOutlineClipboard, HiOutlineClipboardCheck } from 'react-icons/hi'



const Donate = () => {
const moneyBreakdown = [
  { percent: 87, width: '100%', label: 'Direct program delivery' },
  { percent: 9, width: '35%', label: 'Pastoral Oversight & Local Operations' },
  { percent: 4, width: '15%', label: 'CSI Compliance & Reporting' },
]

const bankFields = [
  { label: 'Account name', value: 'Deon Ellison Foundation' },
  { label: 'Account number', value: '4471 8823 9900 1142' },
  { label: 'BRANCH CODE', value: '021 000 021' },
  { label: 'Account type', value: 'Checking' },
  { label: 'SWIFT / BIC', value: 'FCBKUS33XXX' },
  { label: 'Reference', value: 'PROGRAMME – [your full name / company name]' },
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

    {/*Bank Transfer*/}
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
          <span className="bank-country-eyebrow">Northern Cape, Douglas 8730</span>
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
        <strong>Important:</strong> Always include your chosen programme and full name in the
        reference field. We will send a tax receipt to your registered email
        within 3 business days of receiving your transfer.
      </div>
    </div>

    </div>
    </div>
    
    {/*Donation Impact*/}
    <div className="donate-impact">
    <div className="donate-impact-content">
    <span className="donate-badge">
    <span className="badge-line"></span>
     your impact
    </span> 

    <h2 className="donate-impact-title">
    <span className="line1">What a transfer</span>
    <span className="line2">makes possible.</span>
    </h2>

    <div className="donate-impact-method">
    {/*The Scale Metric*/}
    <div className="donate-impact-item">
    <span className="donate-impact-number">R250</span>
    <span className="donate-impact-label">Funds an emergency parcel</span>
    <span className="donate-impact-caption">Supplies a highly vulnerable family with a complete, 
    nutritionally balanced grocery hamper to combat immediate household hunger.</span>
    </div>
    {/*The Integrity Metric*/}
   <div className="donate-impact-item">
    <span className="donate-impact-number">R1,200</span>
    <span className="donate-impact-label">Equips local school children</span>
    <span className="donate-impact-caption">Provides essential school uniforms, winter blankets, and 
    durable shoes to restore personal pride and dignity for children in need.</span>
   </div>
   {/*The Cost Metric*/}
   <div className="donate-impact-item">
    <span className="donate-impact-number">R6,250</span>
    <span className="donate-impact-label">Powers the community kitchen</span>
    <span className="donate-impact-caption">Funds a major community nutrition drive, providing 250 hot, 
    wholesome meals directly to children and elderly residents at our relief tables.</span>
   </div>
    {/*The Growth Target Metric*/}
   <div className="donate-impact-item">
    <span className="donate-impact-number">R25,000</span>
    <span className="donate-impact-label">Sustains a local outreach drive</span>
    <span className="donate-impact-caption">Secures a full quarter of community mentorship initiatives, safe space 
    management, and critical social resilience infrastructure under trusted local guidance.</span>
   </div>
   </div>

    </div>
    </div>

    </div>
  )
}

export default Donate