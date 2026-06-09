Push-Location $PSScriptRoot
try {
    Write-Host "This is a Node/TypeScript project — running 'npm start'..."
    npm run start
} finally {
    Pop-Location
}
