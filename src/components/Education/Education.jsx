import React from 'react';
import TimeLineItem from '../TimeLineItem';
import { useTranslation } from 'react-i18next';
import { Subtitle } from '../Resume/styled';

const Education = (props) => {
  const { t } = useTranslation();

  return (
    <div className="sm:pr-2">
      <Subtitle className="text-lg sm:text-xl">{t('Resume Education')}</Subtitle>
      <TimeLineItem
        year={2015}
        event={t('Resume Event High School')}
        issuer={t('Resume High School Issuer')}
      />
      <TimeLineItem year={2015} event={t('Resume Event First')} issuer={t('Resume First Issuer')} />
      <TimeLineItem
        year={2018}
        event={t('Resume Bachelor Event')}
        issuer={t('Resume Bachelor Issuer')}
        latest={true}
      />
    </div>
  );
};

export default Education;
