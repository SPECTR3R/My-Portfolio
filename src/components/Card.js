import React from 'react';
import { Box, Image, Badge, Text, Stack, Button, useColorMode } from '@chakra-ui/core';

const Card = ({ cardTitle, cardSrc, cardText, cardTags = [' ', ''], cardButton }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.200', dark: 'gray.700' };

  return (
    <Box w="400px" rounded="20px" my={10} overflow="hidden" boxShadow="sm" bg={bgColor[colorMode]}>
      <Image src={cardSrc} alt="cardimg" />
      <Box p={8}>
        <Text as="h2" fontWeight="semibold" fontSize="xl" my={4}>
          {cardTitle}
        </Text>
        <Text textAlign="left" fontWeight="light" fontSize="md">
          {cardText}
        </Text>

        <Stack isInline align="baseline" wrap="wrap">
          {cardTags.map((tag, idx) => (
            <Badge variant="solid" rounded="full" my={2} key={idx} px={2}>
              {tag}
            </Badge>
          ))}
        </Stack>

        {cardButton && (
          <Button
            mr="5px"
            size="sm"
            bg={colorMode === 'light' ? 'white' : 'gray.800'}
            boxShadow="sm"
            _hover={{ bg: 'gray.400' }}
            _active={{ boxShadow: 'lg' }}
          >
            {cardButton}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Card;
