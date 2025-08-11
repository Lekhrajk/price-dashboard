import React, { useEffect, useState } from 'react'
import { apiWrapper } from '../../apis';
import ENDPOINTS from '../../apis/endpoints';
import STATIC_DATA from '../../constants';
import PricingCard from '../../components/cards/pricing/PricingCard';
import OffersCard from '../../components/cards/pricing/OffersCard';
import PricingLoader from '../../components/skeleton/PricingLoader';
import OffersCardLoader from '../../components/skeleton/OffersCardLoader';

const { baseURL } = STATIC_DATA;

const PricingList = () => {
    const [plans, setPlans] = useState([]);
    const [offers, setOffers] = useState([]);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isOffersLoading, setIsOffersLoading] = useState(true);

    useEffect(() => {
        fetchPlans();
        fetchOffers();
    }, [])

    const fetchPlans = async () => {
        const { hasError, data } = await apiWrapper("GET", `${baseURL}${ENDPOINTS.PRICING_LIST}`);
        if (!hasError && data) {
            setPlans(data);
            
            const savedPlanId = localStorage.getItem('selectedPlanId');
            if (savedPlanId) {
                const savedPlan = data.find(plan => plan.id === parseInt(savedPlanId));
                if (savedPlan) {
                    setSelectedPlan(savedPlan);
                } else {
                    setSelectedPlan(data[0]);
                }
            } else {
                setSelectedPlan(data[0]);
            }
        }
        setIsLoading(false);
    }

    const fetchOffers = async()=> {
        const { hasError, data } = await apiWrapper("GET", `${baseURL}${ENDPOINTS.OFFER_LIST}`);
        if (!hasError && data) {
            setOffers(data);
            setIsOffersLoading(false);
        }
    }

    const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
        localStorage.setItem('selectedPlanId', plan.id.toString());
    }

    if (isLoading) {
        return (
            <div className="py-5 px-8 space-y-8">
                <PricingLoader isLoading={isLoading} numberOfCards={3} />
                <OffersCardLoader isLoading={isOffersLoading} />
            </div>
        );
    }

    return (
        <div className="py-5 px-8 space-y-8">
            <h1 className="text-2xl font-bold text-gray-900">Plans & Pricing</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map((plan) => (
                    <PricingCard
                        key={plan.id}
                        item={plan}
                        isSelected={selectedPlan?.id === plan.id}
                        onSelect={handlePlanSelect}
                    />
                ))}
            </div>

            {selectedPlan && (
                <OffersCard 
                    selectedPlan={selectedPlan}
                    offers={offers}
                />
            )}
        </div>
    )
}

export default PricingList