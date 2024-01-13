'use client'

import React from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from '@/components/ui/label'


const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
})

const ContactForm = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        email:"",
        message:""
      },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values.email)
      try {
        formSchema.parse(values);
        console.log("Email is valid!");
      } catch (error: any) {
        console.error("Invalid email:", error.errors);
      }}
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 py-4">
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Prenom</FormLabel>
            <FormControl>
              <Input className='bg-white' placeholder="John Doe" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
          
        )}
      />
       <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input className='ring-none' placeholder="john.doe@gmail.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
          
        )}
      />
       <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Message</FormLabel>
            <FormControl>
              <Textarea className='ring-none bg-white' placeholder="Votre message" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
          
        )}
      />
      <Button type="submit">Envoyer</Button>
    </form>
  </Form>
  )
}

export default ContactForm