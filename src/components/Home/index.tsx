import { Button, Stack, Text, Textarea } from '@mantine/core'
import { useCallback, useState } from 'react'

export default function Home() {
  const [value, setValue] = useState('')

  const onClick = useCallback(() => {
    const cleaned = value
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
  }, [value])

  return (
    <Stack align="center" justify="center" h="100dvh">
      <Stack gap={10} w={600}>
        <Text fz={32} fw="bold">
          Welcome back, Gia Hân!
        </Text>
        <Textarea
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          label="Nhập HTML"
          placeholder={`<html lang="vi">...</html>`}
          autosize
          minRows={10}
          maxRows={10}
        />
        <Button onClick={onClick}>Submit</Button>
      </Stack>
    </Stack>
  )
}
