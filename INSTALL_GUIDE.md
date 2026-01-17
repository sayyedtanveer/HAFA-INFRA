# 🚀 STEP-BY-STEP: Install Node.js & Run HAFA INFRA

## ⏱️ Time Required: 15-20 minutes

---

## STEP 1: Install Node.js (5 minutes)

### Option A: Online Installation (Recommended)

1. **Visit Node.js Website**
   - Go to: https://nodejs.org/
   - Click on the **LTS** (Long Term Support) button
   - It will show something like "v20.x" or "v22.x"

2. **Download the Windows Installer**
   - The download should start automatically
   - Look for file named: `node-vXX.XX.X-x64.msi`
   - Save it to your Downloads folder

3. **Run the Installer**
   - Double-click the downloaded .msi file
   - Click "Next" through the installation wizard
   - **IMPORTANT STEP**: On the "Tools for Native Modules" screen:
     - ✅ Make sure "Automatically install the necessary tools..." is checked
     - OR manually check "Add to PATH"
   - Click "Install"
   - Wait for installation to complete
   - Click "Finish"

4. **Restart Your Computer** (Highly Recommended)
   - Close all applications
   - Restart Windows
   - This ensures npm is available in all terminals

---

### Option B: Direct Download Link

**Node.js v20 LTS**
- Download: https://nodejs.org/download/release/v20.11.0/node-v20.11.0-x64.msi
- Or latest LTS: https://nodejs.org/ (click LTS button)

---

## STEP 2: Verify Installation (2 minutes)

1. **Open PowerShell**
   - Press: `Win + X`
   - Click: "Terminal" or "Windows PowerShell"
   - (Or search for "PowerShell" in Windows Start menu)

2. **Check Node.js Version**
   ```powershell
   node --version
   ```
   Should show something like: `v20.11.0`

3. **Check npm Version**
   ```powershell
   npm --version
   ```
   Should show something like: `10.2.3`

**If you see version numbers, Node.js is installed correctly!** ✅

---

## STEP 3: Navigate to Project (1 minute)

```powershell
cd "c:\Users\tanveer.sayyed\source\repos\Replitrotihai\HAFA-INFRA"
```

**Verify you're in the right folder:**
```powershell
pwd
```
Should show: `C:\Users\tanveer.sayyed\source\repos\Replitrotihai\HAFA-INFRA`

---

## STEP 4: Install Project Dependencies (3-5 minutes)

```powershell
npm install
```

**What this does:**
- Downloads all required packages (React, Vite, Tailwind, etc.)
- Creates a `node_modules` folder
- Creates `package-lock.json` file

**Expected output:**
```
up to date, audited 45 packages in 2.34s
```

---

## STEP 5: Start Development Server (1 minute)

```powershell
npm run dev
```

**Expected output:**
```
  VITE v5.0.0  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

---

## STEP 6: Open in Browser (1 minute)

1. **Option A: Auto-Open**
   - Browser should open automatically at `http://localhost:5173`

2. **Option B: Manual Open**
   - Open your web browser (Chrome, Edge, Firefox)
   - Type in address bar: `http://localhost:5173`
   - Press Enter

**You should see the HAFA INFRA website!** 🎉

---

## 🎯 Testing the Website

### Test These Features:

**Public Pages**
- ✅ Home - Click logo to go to home page
- ✅ About - Click "About Us" in menu
- ✅ Products - Click "Products" in menu
- ✅ Services - Click "Services" in menu
- ✅ Contact - Click "Contact Us" in menu

**Admin Features**
- ✅ Dashboard - Type in browser: `http://localhost:5173/admin/dashboard`
- ✅ Create PO - Click "Create Purchase Order" button
- ✅ Create Challan - Click "Create Delivery Challan" button

**Interactive Features**
- ✅ WhatsApp Button - Click "WhatsApp Us" button
- ✅ Call Button - Click "Call Now" button
- ✅ Mobile Menu - Resize browser to mobile size, click hamburger menu
- ✅ Fill Form - Try filling the contact form

---

## ⚠️ TROUBLESHOOTING

### Problem: "npm is not recognized"

**Solution 1:**
- Close PowerShell completely
- Reopen as Administrator
- Try again

**Solution 2:**
- Restart your computer
- Open new PowerShell window
- Try again

**Solution 3:**
- Uninstall Node.js
- Reinstall from: https://nodejs.org/
- Make sure to check "Add to PATH"
- Restart computer

---

### Problem: "Port 5173 is already in use"

**Solution:**
```powershell
npm run dev -- --port 5174
```

Then visit: `http://localhost:5174`

---

### Problem: "Module not found" or other npm errors

**Solution:**
```powershell
# Delete node_modules
Remove-Item -Path "node_modules" -Recurse -Force

# Clear npm cache
npm cache clean --force

# Reinstall
npm install

# Start again
npm run dev
```

---

### Problem: "Cannot find file" errors

**Make sure you're in the right directory:**
```powershell
# Should show all the project files
Get-ChildItem

# Should show: README.md, package.json, vite.config.js, src, etc.
```

---

## 📋 Quick Reference Cheat Sheet

```powershell
# Navigate to project
cd "c:\Users\tanveer.sayyed\source\repos\Replitrotihai\HAFA-INFRA"

# Check Node.js version
node --version

# Check npm version
npm --version

# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Stop server
# Press: Ctrl + C in PowerShell

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## ✅ Success Checklist

- [ ] Node.js installed (`node --version` shows version)
- [ ] npm installed (`npm --version` shows version)
- [ ] Navigated to project folder
- [ ] Ran `npm install` successfully
- [ ] Ran `npm run dev` successfully
- [ ] Browser opened at `http://localhost:5173`
- [ ] Website loads and displays correctly
- [ ] Can click menu items and navigate pages
- [ ] Can access admin dashboard at `/admin/dashboard`

---

## 📞 Common Questions

**Q: Do I need to run `npm install` every time?**
A: No, only once. The `node_modules` folder stays unless deleted.

**Q: Can I close the terminal while developing?**
A: No, the server stops when you close the terminal. Keep it open.

**Q: How do I stop the development server?**
A: Press `Ctrl + C` in the PowerShell terminal.

**Q: Can I run on a different port?**
A: Yes: `npm run dev -- --port 3000` (use any port number)

**Q: What if npm install fails?**
A: 
- Check internet connection
- Try: `npm cache clean --force`
- Delete `node_modules` folder
- Try `npm install` again

---

## 🎉 You're Ready!

Once you complete these steps:
1. Website will be running locally
2. You can develop and test features
3. You can customize the project
4. You can build for production

---

**Need Help?**
- Node.js docs: https://nodejs.org/
- npm docs: https://docs.npmjs.com/
- Vite docs: https://vitejs.dev/

---

**Created**: January 16, 2026
**For**: HAFA INFRA Project
**Status**: ✅ Ready to Follow

Happy Coding! 🚀
