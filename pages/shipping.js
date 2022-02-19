import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Store } from '../utils/store';

export default function Shipping() {
  const router = useRouter();
  const { state } = useContext(Store);
  const { userInfo } = state;
  useEffect(() => {
    if (!userInfo) {
      router.push('/login?redirect=/shipping');
    }
  }, []);

  return <div>shipping</div>;
}
