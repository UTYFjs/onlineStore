import React, { CSSProperties } from 'react';
import styles from './BubbleFilterList.module.scss';
import BubbleFilter from '../BubbleFilter/BubbleFilter';
import { SelectedFilters, useUtilityStore } from '../../store/zustandStore';
import { defaultSelectedFilters, filterType } from '../../data/data';

interface IBubbleFilterListProps {
  customStyles?: CSSProperties;
  customStylesBubbleItem?: CSSProperties;
}

export default function BubbleFilterList({
  customStyles,
  customStylesBubbleItem,
}: IBubbleFilterListProps) {
  const { selectedFilters, filters, setAllSelectedFilters } = useUtilityStore((state) => state);
  const handleResetFilters = (selectedFilters: SelectedFilters) => {
    setAllSelectedFilters(selectedFilters, 0);
  };
  const activeFilters = Object.entries(selectedFilters)
    .map((item) => {
      if (item[1].length) {
        const itemFilter = filters.find((itemFilter) => itemFilter.name === item[0]);
        if (itemFilter) return { name: itemFilter.name, nameText: itemFilter.textName };
      }
      return null;
    })
    .filter((item) => item !== null);
  return (
    <div className={styles.bubbles} style={{ ...customStyles }}>
      {' '}
      {
        // to do Fix issue with null
        activeFilters.length !== 0 &&
          (
            activeFilters as unknown as {
              name: filterType;
              nameText: {
                ru: string;
                en: string;
              };
            }[]
          ).map((filter) => (
            <BubbleFilter
              key={filter.name + filter.nameText.ru}
              content={filter.nameText.ru}
              customStyles={customStylesBubbleItem}
              onClick={() => {
                handleResetFilters({ ...selectedFilters, [filter.name]: [] });
              }}
            />
          ))
      }
      {activeFilters.length !== 0 && (
        <BubbleFilter
          content="Сбросить все"
          customStyles={customStylesBubbleItem}
          onClick={() => {
            handleResetFilters({ ...defaultSelectedFilters });
          }}
        />
      )}
    </div>
  );
}
