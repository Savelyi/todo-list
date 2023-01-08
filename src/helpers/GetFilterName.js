import { useTranslation } from 'react-i18next';

export const GetFilterName = (filter) => {
  const { t } = useTranslation();
  return t(`Filters.${filter}`);
};
