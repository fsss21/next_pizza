import { cn } from '@/lib/utils';
import { Container } from './container';
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui';
import { User } from 'lucide-react';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className="flex items-center justify-between py-8">
                {/* {левая часть} */}
                <div>
                    <Image src="/logo.png" width={35} height={35} alt="Logo" />
                    <div>
                        <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
                        <p className="text-sm text-gray-400 leading-5">Вкусней уже некуда</p>
                    </div>
                </div>

                {/* {правая часть} */}
                <div className="flex items-center gap-3">
                    <Button className="flex items-center gap-1" variant="outline">
                        <User size={16} />
                        Войти
                    </Button>
                </div>
            </Container>
        </header>
    );
};
