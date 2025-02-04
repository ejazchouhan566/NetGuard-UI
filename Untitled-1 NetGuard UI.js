import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Wifi, EyeOff, Clock, Lock, Globe, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

export default function NetGuardDashboard() {
  const [vpnActive, setVpnActive] = useState(false);
  const [focusMode, setFocusMode] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">NetGuard Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
        <Card className="bg-gray-800 p-4 rounded-2xl shadow-md">
          <CardContent className="flex flex-col items-center">
            <ShieldCheck size={32} />
            <p className="mt-2 text-sm">VPN Protection</p>
            <Button 
              className="mt-2 w-full" 
              onClick={() => setVpnActive(!vpnActive)}>
              {vpnActive ? "Deactivate" : "Activate"}
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 p-4 rounded-2xl shadow-md">
          <CardContent className="flex flex-col items-center">
            <Wifi size={32} />
            <p className="mt-2 text-sm">Network Optimizer</p>
            <Button className="mt-2 w-full">Optimize</Button>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 p-4 rounded-2xl shadow-md">
          <CardContent className="flex flex-col items-center">
            <EyeOff size={32} />
            <p className="mt-2 text-sm">Ad & Tracker Blocker</p>
            <Button className="mt-2 w-full">Enable</Button>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 p-4 rounded-2xl shadow-md">
          <CardContent className="flex flex-col items-center">
            <Clock size={32} />
            <p className="mt-2 text-sm">Focus Mode</p>
            <Button 
              className="mt-2 w-full" 
              onClick={() => setFocusMode(!focusMode)}>
              {focusMode ? "Disable" : "Enable"}
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 p-4 rounded-2xl shadow-md">
          <CardContent className="flex flex-col items-center">
            <Lock size={32} />
            <p className="mt-2 text-sm">Password Manager</p>
            <Button className="mt-2 w-full">Access</Button>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 p-4 rounded-2xl shadow-md">
          <CardContent className="flex flex-col items-center">
            <Globe size={32} />
            <p className="mt-2 text-sm">Fact-Checker AI</p>
            <Button className="mt-2 w-full">Verify News</Button>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 p-4 rounded-2xl shadow-md">
          <CardContent className="flex flex-col items-center">
            <CreditCard size={32} />
            <p className="mt-2 text-sm">Safe Payments</p>
            <Button className="mt-2 w-full">Scan Transaction</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
