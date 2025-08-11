import React, { useState, useEffect } from 'react'
import { CountdownTimer } from '../../utils/CountdownTimer';

const OffersCard = ({ selectedPlan, offers }) => {
    const getOffersForPlan = (planId) => {
        return offers.filter(offer => offer.planId === planId);
    };

    const planOffers = getOffersForPlan(selectedPlan?.id);

    return (
        <div className="bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-6 space-y-4 lg:space-y-0">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                            Offers on {selectedPlan?.title} plan
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm">Exclusive deals and discounts</p>
                    </div>
                </div>

                {/* Countdown Timer in Header */}
                {planOffers.some(offer => offer.expires) && (
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                        <span className="text-xs sm:text-sm text-gray-500 font-medium">Next offer expires:</span>
                        <CountdownTimer
                            expires={planOffers
                                .filter(offer => offer.expires)
                                .sort((a, b) => {
                                    const aTotal = a.expires.days * 86400 + a.expires.hours * 3600 + a.expires.minutes * 60 + a.expires.seconds;
                                    const bTotal = b.expires.days * 86400 + b.expires.hours * 3600 + b.expires.minutes * 60 + b.expires.seconds;
                                    return aTotal - bTotal;
                                })[0]?.expires
                            }
                        />
                    </div>
                )}
            </div>

            <div className="space-y-3 sm:space-y-4">
                {planOffers.length > 0 ? (
                    planOffers.map((offer) => (
                        <div key={offer.id} className="bg-white border border-gray-100 rounded-xl p-3 sm:p-4 lg:p-5 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                                <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse mt-1 sm:mt-0"></div>
                                    <div className="flex-1 min-w-0">
                                        <span className="font-semibold text-gray-900 text-sm sm:text-base lg:text-lg block break-words">{offer.body}</span>
                                        {offer.expires && (
                                            <div className="flex items-center space-x-2 mt-2 sm:mt-1">
                                                <CountdownTimer expires={offer.expires} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 sm:flex-shrink-0 md:ml-0 ml-5">
                                    <div className="px-2 py-1 sm:px-3 flex items-center space-x-2 sm:py-1 bg-gradient-to-r from-green-100 to-green-200 text-green-700 rounded-full text-xs font-semibold">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>  Active
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-8 sm:py-12">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">No offers available</h3>
                        <p className="text-sm sm:text-base text-gray-500">Check back later for exclusive deals on this plan</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OffersCard; 