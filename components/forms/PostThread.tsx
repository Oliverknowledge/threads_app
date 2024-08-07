"use client";

import * as z from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";




import { ThreadValidation } from "@/lib/validations/thread"
import { Textarea } from "../ui/textarea";
import { createThread } from "@/lib/actions/thread.actions";
//import { updateUser } from "@/lib/actions/user.actions";

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}


function PostThread({userId}: {userId: string}){
    const router = useRouter();
    const pathname = usePathname();

  
 
  const onSubmit = async (values: z.infer<typeof ThreadValidation>) => {
      await createThread({text: values.thread, author: userId, communityId: null, path: pathname}); 
      router.push("/");
  }
    const form = useForm({
      resolver: zodResolver(ThreadValidation),
      defaultValues: {
        thread: '',
        accountId: userId,
      },
    });
    return (
        <Form {...form}>
        <form
          className='mt-10 flex flex-col justify-start gap-10 '
          onSubmit={form.handleSubmit(onSubmit)}
        >
        <FormField
          control={form.control}
          name='thread'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col gap-3 mt-10'>
              <FormLabel className='text-base-semibold text-light-2'>
                Content     
              </FormLabel>
              <FormControl className = "text-light-1 no-focus border border-dark-4 bg-dark-3">
                <Textarea
                rows={15}
                  className='account-form_input no-focus'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant = "default" size = "lg" className = "text-light-2">Post Thread</Button>
            </form>

        </Form>

    )   
}

export default PostThread