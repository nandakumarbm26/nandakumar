import { Box, Button, FormLabel, Heading, Input, InputGroup, Stack } from '@chakra-ui/react';
import { useState } from 'react';

function Login() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('username', e.target.username.value);
    formData.append('password', e.target.password.value);

    try {
      const response = await fetch('https://devbuddy.app/api/v1/auth/login', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }

    setLoading(false);
  };

  return (
    <Box className='main' p='5%' bg='white' color='black'>
      <Heading as='h1' color='blush' borderBottom='2px solid orange' mb='20px'>Login</Heading>
      <Box w={{ b: '100%', md: '50%' }} p='3% 5%' bg='dark' borderRadius='10px'>
        <form onSubmit={handleSubmit} style={{ display: 'flex', rowGap: '10px', flexDirection: 'column' }}>
          <InputGroup gap='10px' flexDirection='column'>
            <FormLabel>
              Email/Username *
              <Input type='text' name='username' required />
            </FormLabel>
            <FormLabel>
              Password *
              <Input type='password' name='password' required />
            </FormLabel>
          </InputGroup>
          <Button type='submit' width='120px' fontSize={{ b: '12px', md: '16px' }} bg='fanta' _hover={{ bg: 'blush' }} isLoading={loading}>Login</Button>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
