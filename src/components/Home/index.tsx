import { Button, Stack, Text, Textarea } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useCallback } from 'react'

type FormProps = {
  html: string
}

export default function Home() {
  const form = useForm<FormProps>({
    initialValues: { html: '' },
    validate: { html: (value: string) => (value === '' ? 'Không được để trống' : null) },
  })

  const submit = useCallback((values: FormProps) => {
    const cleaned = values.html
      .replace(/<script>\s*jQuery\('.*?\.hidden_content'\)\.html\(''\);\s*<\/script>/g, '')
      .replace(
        /<div class="hidden_content"[^>]*style=["']?display:\s*none;?["']?[^>]*>/g,
        '<div class="hidden_content">',
      )
      .replace(/filter:\s*blur\(12px\);?/g, '')
      .replace(/-webkit-filter:\s*blur\(12px\);?/g, '')

    const blob = new Blob([cleaned], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    window.open(url, '_blank')
  }, [])

  return (
    <Stack align="center" justify="center" h="100dvh" w="100vw">
      <form onSubmit={form.onSubmit(submit)}>
        <Stack gap={10}>
          <Text fz={32} fw="bold">
            Welcome back, Gia Hân!
          </Text>
          <Textarea
            label="Nhập HTML"
            placeholder={`<html lang="vi">...</html>`}
            autosize
            minRows={10}
            maxRows={10}
            {...form.getInputProps('html')}
          />
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </Stack>
  )
}
