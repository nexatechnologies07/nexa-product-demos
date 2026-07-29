$ErrorActionPreference = "Stop"

$RepoName = "nexa-product-demos"
$ProjectPath = Split-Path -Parent $MyInvocation.MyCommand.Path

Set-Location $ProjectPath

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    throw "Git is not installed or not available in PATH."
}

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    throw "GitHub CLI is required. Install it with: winget install --id GitHub.cli"
}

Write-Host "Checking GitHub login..." -ForegroundColor Cyan
gh auth status

if (-not (Test-Path ".git")) {
    git init
    git branch -M main
}

git add .
$hasCommit = git rev-parse --verify HEAD 2>$null
if (-not $hasCommit) {
    git commit -m "feat: create Nexa Technologies public product showcase"
} else {
    git commit -m "chore: update Nexa Technologies product showcase" 2>$null
}

$remoteExists = git remote get-url origin 2>$null
if (-not $remoteExists) {
    gh repo create $RepoName --public --source . --remote origin --push --description "Official Nexa Technologies software product screenshots, demos and commercial information"
} else {
    git push -u origin main
}

Write-Host "" 
Write-Host "Repository uploaded successfully." -ForegroundColor Green
Write-Host "Enable GitHub Pages in repository Settings > Pages > Source: GitHub Actions." -ForegroundColor Yellow
Write-Host "Your public website will normally be: https://YOUR-GITHUB-USERNAME.github.io/$RepoName/" -ForegroundColor Cyan
