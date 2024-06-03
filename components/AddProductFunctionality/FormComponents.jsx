
import { Control } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "../ui/input";

  export function CustomFormField({ name, control, hebrewName }) {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <FormItem>
            <h3 className="font-bold">{hebrewName}</h3>
            <FormControl>
              <Input {...field} />
            </FormControl>
            {error && <FormMessage>{error.message}</FormMessage>}
          </FormItem>
        )}
      />
    );
  }

  export function CustomFormSelect({name, control, items, labelText}){
    return (<FormField
     control={control} 
     name={name} 
     render={({field})=>{
        return (
            <FormItem>
                     <FormLabel className='capitalize'>{labelText || name}</FormLabel>
                    <Select
                     onValueChange={field.onChange} 
                     defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue/>
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {items.map((item)=>{
                                return <SelectItem key={item} value={item}>
                                    {item}
                                </SelectItem>
                            })}
                        </SelectContent>
                    </Select>
                    <FormMessage/>
            </FormItem>)
       
    }}/>
    )
    
  }