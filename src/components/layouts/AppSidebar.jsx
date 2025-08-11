import React, { useState } from 'react'
import STATIC_DATA from '../../constants'
import CommonMessages from '../messages';
const { sidebarItems } = STATIC_DATA;

const AppSidebar = ({ onToggle, isMobile }) => {
    const [activeTab, setActiveTab] = useState("pricing");

    const getIcon = (slug) => {
        switch(slug) {
            case 'pricing':
                return (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                );
            case 'dashboard':
                return (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                );
            default:
                return (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                );
        }
    };

    return (
        <div className="bg-slate-100 border-r border-slate-200 py-6 px-4 h-full w-full">
            {/* Header with close button for mobile */}
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-800 px-2">SciSpace</h2>
                {isMobile && (
                    <button
                        onClick={onToggle}
                        className="p-2 rounded-lg hover:bg-slate-200 transition-colors duration-200"
                    >
                        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}
            </div>
            
            <ul className="list-none space-y-2">
                {
                    sidebarItems && sidebarItems.length > 0 ?
                        sidebarItems.map((item) => {
                            const isActive = activeTab === item?.slug;
                            return (
                                <li key={item.id}>
                                    <button
                                        onClick={() => {
                                            setActiveTab(item.slug);
                                            if (isMobile) {
                                                onToggle();
                                            }
                                        }}
                                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                                            isActive 
                                                ? "bg-blue-600 text-white" 
                                                : "text-slate-600 hover:bg-slate-200"
                                        }`}
                                    >
                                        <span>{getIcon(item.slug)}</span>
                                        <span>{item.title}</span>
                                    </button>
                                </li>
                            )
                        })
                        :
                        <div className="my-auto py-5">
                            <CommonMessages title="No data to show!" />
                        </div>
                }
            </ul>
        </div>
    )
}

export default AppSidebar