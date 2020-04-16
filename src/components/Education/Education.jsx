import React from 'react';
import TimeLineItem from '../TimeLineItem';
import { useTranslation } from 'react-i18next';
import { Subtitle } from '../Resume/styled';

const Education = (props) => {
  const { t } = useTranslation();

  return (
    <div className="sm:pr-2">
      <Subtitle className="text-lg sm:text-xl">{t('resume_title')}</Subtitle>
      <TimeLineItem
        year={2015}
        event={t('education_item_1_event')}
        issuer={t('education_item_1_paragraph')}
      />
      <TimeLineItem
        year={2015}
        event={t('education_item_2_event')}
        issuer={t('education_item_2_paragraph')}
      />
      <TimeLineItem
        year={2018}
        event={t('education_item_3_event')}
        issuer={t('education_item_3_paragraph')}
        latest={true}
      />
    </div>
  );
};

export default Education;
