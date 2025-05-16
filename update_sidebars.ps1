$files = Get-ChildItem -Path "c:\Users\hp\Desktop\mockey\app\src\app" -Filter "TShirtSidebar.tsx" -Recurse

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Skip files that already have the functionality
    if ($content -match "uploadedDesign" -or $content -match "fileInputRef") {
        Write-Host "Skipping $($file.FullName) - already updated"
        continue
    }
    
    # Add imports
    $content = $content -replace "import \{ ChevronDown \} from `"lucide-react`";\s*import \{ Button \} from `"@/components/ui/button`";\s*import \{ useState \} from `"react`";", "import { ChevronDown } from `"lucide-react`";"+ "`r`n" + "import { Button } from `"@/components/ui/button`";" + "`r`n" + "import { useState, useRef, ChangeEvent } from `"react`";" + "`r`n" + "import Image from `"next/image`";"
    
    # Add state and ref
    $content = $content -replace "(\s*const \[expanded, setExpanded\] = useState<Record<string, boolean>>\({.*?}\);)", "$1`r`n`r`n  const [uploadedDesign, setUploadedDesign] = useState<string | null>(null);`r`n  const fileInputRef = useRef<HTMLInputElement>(null);"
    
    # Add handler functions
    $content = $content -replace "(\s*const toggleSection = \(section: string\) => {.*?}\);)", "$1`r`n`r`n  const handleUploadClick = () => {`r`n    if (fileInputRef.current) {`r`n      fileInputRef.current.click();`r`n    }`r`n  };`r`n`r`n  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {`r`n    const file = event.target.files?.[0];`r`n    if (file) {`r`n      // Check if the file is an image`r`n      if (!file.type.startsWith('image/')) {`r`n        alert('Please upload an image file');`r`n        return;`r`n      }`r`n`r`n      // Create a URL for the uploaded image`r`n      const imageUrl = URL.createObjectURL(file);`r`n      setUploadedDesign(imageUrl);`r`n    }`r`n  };"
    
    # Update the upload design button section
    $buttonPattern = "<div class=`"p-4 border-b border-gray-200`">\s*<h3 class=`"text-sm font-medium uppercase text-gray-900 mb-4`">DESIGN</h3>\s*<Button\s*variant=`"outline`"\s*class=`"w-full justify-between border border-gray-300 text-gray-700 bg-white hover:bg-gray-50`"\s*>\s*Upload Design\s*<svg width=`"16`" height=`"16`" viewBox=`"0 0 24 24`" fill=`"none`" stroke=`"currentColor`" strokeWidth=`"2`">\s*<path d=`"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`" />\s*<polyline points=`"17 8 12 3 7 8`" />\s*<line x1=`"12`" y1=`"3`" x2=`"12`" y2=`"15`" />\s*</svg>\s*</Button>\s*</div>"
    
    $replacement = "<div class=`"p-4 border-b border-gray-200`">`r`n        <h3 class=`"text-sm font-medium uppercase text-gray-900 mb-4`">DESIGN</h3>`r`n        <input`r`n          type=`"file`"`r`n          ref={fileInputRef}`r`n          onChange={handleFileChange}`r`n          accept=`"image/*`"`r`n          className=`"hidden`"`r`n        />`r`n        <Button `r`n          variant=`"outline`" `r`n          className=`"w-full justify-between border border-gray-300 text-gray-700 bg-white hover:bg-gray-50`"`r`n          onClick={handleUploadClick}`r`n        >`r`n          Upload Design`r`n          <svg width=`"16`" height=`"16`" viewBox=`"0 0 24 24`" fill=`"none`" stroke=`"currentColor`" strokeWidth=`"2`">`r`n            <path d=`"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`" />`r`n            <polyline points=`"17 8 12 3 7 8`" />`r`n            <line x1=`"12`" y1=`"3`" x2=`"12`" y2=`"15`" />`r`n          </svg>`r`n        </Button>`r`n        `r`n        {uploadedDesign && (`r`n          <div className=`"mt-4`">`r`n            <div className=`"relative w-full h-40 border border-gray-200 rounded overflow-hidden`">`r`n              <Image `r`n                src={uploadedDesign} `r`n                alt=`"Uploaded design`" `r`n                fill`r`n                style={{ objectFit: 'contain' }} `r`n              />`r`n            </div>`r`n            <Button `r`n              variant=`"ghost`" `r`n              size=`"sm`" `r`n              className=`"mt-2 text-red-500 hover:text-red-700 hover:bg-red-50 w-full`"`r`n              onClick={() => setUploadedDesign(null)}`r`n            >`r`n              Remove Design`r`n            </Button>`r`n          </div>`r`n        )}`r`n      </div>"
    
    # Try to find and replace the design section
    if ($content -match "<div class=`"p-4 border-b border-gray-200`">\s*<h3 class=`"text-sm font-medium uppercase text-gray-900 mb-4`">DESIGN</h3>") {
        $content = $content -replace $buttonPattern, $replacement
    }
    
    # Save the updated content
    Set-Content -Path $file.FullName -Value $content
    Write-Host "Updated $($file.FullName)"
}

Write-Host "All TShirtSidebar.tsx files have been updated!"
