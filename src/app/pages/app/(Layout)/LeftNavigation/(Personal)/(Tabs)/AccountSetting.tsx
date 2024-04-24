import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { Box, VStack, Text, HStack, Flex } from "@chakra-ui/react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type AccountSettingType = {
    defaultUsername : string,
    defaultEmail : string,
    defaultPassword : string,
    onSaveChanges : (userName : string, email : string, password : string) => void;
}

export const AccountSetting = (props : AccountSettingType) => {
    const { defaultUsername, defaultEmail, defaultPassword, onSaveChanges } = props;
    
    const [userName, setUsername] = useState('khundugi');
    const [email, setEmail] = useState('usertest24@gmail.com');
    const [password, setPassword] = useState('password contianer');

    const handleOnSaveChanges = () => {
        if(userName.length > 3 && email.length > 3 && password.length > 3) {
            onSaveChanges(userName, email, password);
        }
    }

    return (
        <Card className="!bg-transparent border-none p-0 w-full">
            <CardHeader className="space-y-3 p-0 py-5">
                <CardTitle className="dark:text-white text-black">Account</CardTitle>
                <CardDescription className="dark:text-neutral-400 text-black">
                    Make changes to your account here. Click save when you're done.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 p-0 py-5">
                <Box className="space-y-1">
                    <Text className="dark:text-neutral-500 text-black max-sm:text-xs">Username</Text>
                    <Input 
                        defaultValue={defaultUsername} 
                        className="dark:bg-theme-bgPrimary py-6 rounded-lg max-sm:py-3 dark:placeholder:text-neutral-500 placeholder:text-neutral-500" 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Box>
                <Box className="space-y-1">
                    <Text className="dark:text-neutral-500 text-black max-sm:text-xs">Email</Text>
                    <Input 
                        defaultValue={defaultEmail} 
                        className="dark:bg-theme-bgPrimary py-6 rounded-lg max-sm:py-3 dark:placeholder:text-neutral-500 placeholder:text-neutral-500"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Box>
                <Box className="space-y-1">
                    <Text className="dark:text-neutral-500 text-black max-sm:text-xs">Password</Text>
                    <Input 
                        defaultValue={defaultPassword}
                        className="dark:bg-theme-bgPrimary py-6 rounded-lg max-sm:py-3 dark:placeholder:text-neutral-500 placeholder:text-neutral-500"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Box>

            </CardContent>
            <CardFooter>
                <Button onClick={handleOnSaveChanges}>Save changes</Button>
            </CardFooter>
        </Card>
    )
}
