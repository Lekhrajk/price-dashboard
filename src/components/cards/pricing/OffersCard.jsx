import React, { useState, useEffect } from 'react'
import { CountdownTimer } from '../../utils/CountdownTimer';

const OffersCard = ({ selectedPlan, offers }) => {
    const getOffersForPlan = (planId) => {
        return offers.filter(offer => offer.planId === planId);
    };

    const planOffers = getOffersForPlan(selectedPlan?.id);

    return (
        <div className="bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Offers on {selectedPlan?.title} plan
                        </h2>
                        <p className="text-gray-600 text-sm">Exclusive deals and discounts</p>
                    </div>
                </div>
                
                {/* Countdown Timer in Header */}
                {planOffers.some(offer => offer.expires) && (
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500 font-medium">Next offer expires:</span>
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
            
            <div className="space-y-4">
                {planOffers.length > 0 ? (
                    planOffers.map((offer) => (
                        <div key={offer.id} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse"></div>
                                    <div>
                                        <span className="font-semibold text-gray-900 text-lg">{offer.body}</span>
                                        {offer.expires && (
                                            <div className="flex items-center space-x-2 mt-1">
                                                <CountdownTimer expires={offer.expires} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="px-3 py-1 bg-gradient-to-r from-green-100 to-green-200 text-green-700 rounded-full text-xs font-semibold">
                                        Active
                                    </div>
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">No offers available</h3>
                        <p className="text-gray-500">Check back later for exclusive deals on this plan</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OffersCard; 