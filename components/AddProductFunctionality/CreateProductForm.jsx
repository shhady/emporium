'use client'
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { CustomFormField, CustomFormSelect } from './FormComponents';
import { brands, items, genders } from '../product-form/arrays';
import { Toaster, toast } from 'sonner';
import formSchema from './productFormSchema';
import VariantModal from './VariantModal';

export function CreateProductForm() {
  const [variants, setVariants] = useState([]);
  const [isVariantModalOpen, setIsVariantModalOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      itemId: '',
      description: '',
      price: '',
      gender: '',
      category: '',
      brand: '',
    },
  });

  const addVariant = (variant) => {
    setVariants([...variants, variant]);
  };

  const handleVariantSave = (variant) => {
    addVariant(variant);
    setIsVariantModalOpen(false);
  };

  const handleSubmit = async (values) => {
    values.variants = variants;
    console.log(values);

    const loadingToast = toast.loading('Adding product...');
    try {
      const response = await fetch('/api/products/newProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success('Product added successfully', {
          id: loadingToast,
        });
        form.reset();
        setVariants([]);
      } else {
        toast.error('Failed to add product', {
          id: loadingToast,
        });
      }
    } catch (error) {
      toast.error('Error adding product', {
        id: loadingToast,
      });
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="bg-muted p-8 rounded">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
            <CustomFormField name='itemId' control={form.control} hebrewName={'מספר מזהה'} />
            <CustomFormSelect name='gender' control={form.control} labelText='גברים, נשים, ילדים' items={genders.map(gender => gender.name)} />
            <CustomFormSelect name='category' control={form.control} labelText='סוג' items={items.map(item => item.name)} />
            <CustomFormSelect name='brand' control={form.control} labelText='מותג' items={brands.map(brand => brand.name)} />
            <CustomFormField name='description' control={form.control} hebrewName={'תיאור'} />
            <CustomFormField name='price' control={form.control} hebrewName={'מחיר'} />
          </div>
          <Button type="button" className="mt-4" onClick={() => setIsVariantModalOpen(true)}>Add Variant</Button>
          <Button type="submit" className="mt-4">Submit</Button>
        </form>
      </Form>
      <VariantModal
        isOpen={isVariantModalOpen}
        onClose={() => setIsVariantModalOpen(false)}
        onSave={handleVariantSave}
      />
      <Toaster richColors />
    </>
  );
}
