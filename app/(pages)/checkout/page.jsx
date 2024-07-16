'use client';
import React, { useState, useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function EditUser() {
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userId } = useAuth();
  
  // Base URL for the backend API
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_PROD_URL || process.env.NEXT_PUBLIC_BACKEND_DEV_URL;
  const apiEndpoint = `${baseURL}/api/users/${userId}`;

  // Fetch user data when component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await response.json();
        setCity(userData.city || '');
        setStreet(userData.street || '');
        setHouseNumber(userData.houseNumber || '');
        setPhoneNumber(userData.phoneNumber || '');
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  // Handle form submission to update user data
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
        city,
        street,
        houseNumber,
      phoneNumber
    };

    try {
      const response = await fetch(apiEndpoint, {
        method: 'PUT', // or 'PATCH'
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      });

      if (!response.ok) {
        throw new Error('Failed to update user data');
      }

      const result = await response.json();
      alert('User data updated successfully');
      console.log('Updated user data:', result);

    } catch (error) {
      setError(error.message);
      console.error('Error updating user data:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='container py-4'>
      <h1 className='text-2xl mb-4'>פרטי לקוח</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <div className='form-group'>
          <label htmlFor='city'>עיר</label>
          <Input
          className='border-1 border-black '
            type='text'
            id='city'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='street'>רחוב</label>
          <Input
          className='border-1 border-black '
            type='text'
            id='street'
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='houseNumber'>מספר בית</label>
          <Input
          className='border-1 border-black '
            type='text'
            id='houseNumber'
            value={houseNumber}
            onChange={(e) => setHouseNumber(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='phoneNumber'>מספר טלפון</label>
          <Input
          className='border-1 border-black '
            type='tel' // Changed to 'tel' to better suit phone numbers
            id='phoneNumber'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <Button type='submit'>Save Changes</Button>
      </form>
    </div>
  );
}
