"use client"
// import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react';
import { useModal } from '@/hooks';
import { GetServices } from './GetServices';
import Modal from '@/components/share/Modal';
import Form from '@/components/share/Form';
import styles from './OurServices.module.scss';
// const DynamicComponent = dynamic(() => import('@/components/share/Modal'))

const OurServices = () => {
  const { modalActive, shouldRender, openModal, closeModal } = useModal();
  const [isLoad, setIsLoad] = useState(true)
  useEffect(() => {
    setIsLoad(false)
  },[])
  return (
    <article className={styles.OurServices}>
      
      {!isLoad && <GetServices onClick={openModal} />}

        {shouldRender && (
          <Modal closeModal={closeModal} active={modalActive}>
            <Form isOpen={modalActive} closeModal={closeModal} />
          </Modal>
        )}
      </article>
    )
};

export default OurServices;
