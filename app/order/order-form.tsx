"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
import { motion } from "motion/react"

import { __MyCard } from "@/components/elemets/mycard"

import { Button } from "@/components/ui/button"
import {
  Form
} from "@/components/ui/form"
import { productOptions } from "@/services/options/productOptionsService"
import { SelectOptions } from "@/types/SelectOptions"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import _ZodInput from "@/components/elemets/form/zod-input"
import _ZodSelect from "@/components/elemets/form/zod-select"

const formSchema = z.object({
  name: z.string().min(1, {
    message: "isi nama anda",
  }),
  table: z.string().min(1, {
    message: "isi nomor meja anda",
  }),
  orders: z.array(
    z.object({
      orderId: z.string().nullable().optional(),
      productId: z.string(),
    })
  ).min(1, {
    message: "tulis minimal ada 1 pesanan"
  })
})

export function OrderForm() {
  const [loading, setLoading] = useState(false);
  const [menus, setMenus] = useState<SelectOptions[]>([])


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      table: "",
      orders: [
        {
          orderId: "",
          productId: ""
        }
      ]
    }
  })

  const { reset } = form;

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "orders",
  });

  useEffect(() => { // fetch product options
    const fetchData = async () => {
      try {
        const fetchData = await productOptions();
        setMenus(fetchData);
      } catch (e) {
        toast.error(`Failed to fetch products data.`);
      }
    };
    fetchData();
  }, []);


  async function onSubmit(formData: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const response = await axios.post("/api/order", formData);
      reset();
    } catch (error: any) {
      console.error(error.message)
    } finally {
      setLoading(false);
    }
  }


  // ...

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-2">
          <_ZodInput control={form.control} name="name" placeholder="contoh: Johsua" labelName="Atas Nama :" />
          <_ZodInput control={form.control} name="table" placeholder="contoh : 02" labelName="Nomor Meja :" />
        </div>
        {/* Order Data List Field */}
        <__MyCard title="Pesanan" className="relative">
          <Button type="button" className="absolute top-6 right-6 bg-blue-600" onClick={() => append({ orderId: "", productId: "" })}>
            + Tambah Pesanan
          </Button>
          {fields.map((item, index) => {
            const classDisabled = "grid grid-cols-[0.9fr_0.1fr] gap-2 items-end"
            return (
              <div key={item.id} className={classDisabled}>
                {/* OrderId Field */}
                <div className="hidden">
                  <_ZodInput control={form.control} name={`orders[${index}].orderId`} labelName="OrderId" placeholder="Input orderId" />
                </div>
                {/* Product Field */}
                <_ZodSelect control={form.control} name={`orders[${index}].productId`} title="pesanan" placeholder="Pilih pesanan" datas={menus || []} form={form} />
                {/* Button Remove */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="button" onClick={() => remove(index)} className="mt-2 mb-4 mb-0 py-1.5 rounded-lg bg-red-600 text-slate-50 outline outline-2 outline-red-900 hover:bg-red-600">{"-"}</motion.button>
              </div>
            )
          })}
        </__MyCard>
        <Button className="w-full text-2xl font-psemibold h-12" type="submit">Kirim Pesanan</Button>
      </form>
    </Form>
  )
}
