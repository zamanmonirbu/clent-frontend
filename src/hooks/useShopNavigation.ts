import { useNavigate } from 'react-router-dom';
import { useFilters } from './useFilters';

export function useShopNavigation() {
  const navigate = useNavigate();
  const { updateFilter } = useFilters();

  const navigateToSeries = (series: string) => {
    navigate('/shop');
    updateFilter('series', [series]);
  };

  return { navigateToSeries };
}