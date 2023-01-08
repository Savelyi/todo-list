import { useTranslation } from 'react-i18next';

export const GetFilterName = (filter) => {
  console.log(filter);
  const { t } = useTranslation();
  return t(`Filters.${filter}`);
};
