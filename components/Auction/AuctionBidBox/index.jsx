import { BidBoxContainer } from './styles'
import React from 'react'

const AuctionBidBox = ({
  title,
  highestBid,
  approxUsd,
  secondTitle,
  timeLeft,
  thirdTitle,
  address,
  linkEtherscan,
  auctionStatus,
  bidButton,
  pathHref,
}) => {
  return (
    <BidBoxContainer>
      <div className="plac-bid-bx">
        <div className="top-bx">
          <div className="left-bx">
            <p className="gray-text">{title}</p>
            <h2>{highestBid} eth</h2>
            <p className="gray-text">${approxUsd} USD </p>
          </div>

          <div className="right-bx">
            <div className="bid-status">
              {auctionStatus === 'LIVE' ? (
                <p className="live">
                  <b></b>
                  {auctionStatus}
                </p>
              ) : (
                <p className="complete">{auctionStatus}</p>
              )}
            </div>
          </div>
        </div>

        <div className="bottom-bx">
          <div>
            <p className="gray-text">{secondTitle}</p>
            <h2>{timeLeft}</h2>
          </div>
          <div>
            <p className="gray-text">{thirdTitle}</p>
            <div className="auction-bidder">
              <img src="/images/red-user-holder.png" />
              <a target="_blank">
                {address.slice(0, 5)}...{address.slice(35)}
              </a>
              
              <a href={linkEtherscan} target="_blank" rel="noreferrer">
              <img src="/images/arrow.png" />{' '}
              </a>
              {/* <img className="links-icon" src="/images/gradient.png" /> */}
            </div>
          </div>
        </div>

        <button
          className="place-bid"
          onClick={() => location.replace(pathHref)}
        >
          {bidButton}
        </button>
      </div>
    </BidBoxContainer>
  )
}

export default AuctionBidBox
