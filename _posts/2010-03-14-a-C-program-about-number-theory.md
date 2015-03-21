---
layout: post
title: 关于整数拆分的C语言实现 
tags: [计算机]
categories: study
section: 学习
description: 很早以前写的关于整数拆分的C语言程序。
---
整数拆分，即将任意一个整数拆分为较小的整数之和（自身也算一个）。例如：5=5=4+1=3+2=3+1+1=2+2+1=2+1+1+1=1+1+1+1+1，共7种拆分方式。当整数n很大时，其拆分方式数可由哈代和拉马努金的公式近似计算，
即

![公式](/files/images/chaifen.png)

以下是用其C语言实现。



> 程序1：
>      
>		#include<stdio.h>
>		int k[1000],m[1000],count,t=1,a,c;
>		static int n;
>		void f(int);
>		void main(){
>				int p,s,y;
>				printf("input an integer number:");
>				scanf("%d",&a);
>				for(s=1;s<=a;s++,t=1)
>					{
>					printf("%d\n",s);
>					printf("count=1\n");
>					for(n=2;n<=s;n++)
>						{count=0;c=0;
>						for(p=0;p<n-1;p++)
>						k[p]=1;
>						k[p]=s-n+1;
>						f(n);
>						printf("count=%d\n",count);
>						t+=count;
>						}
>					printf("total count=%d\n",t);
>					m[s-1]=t;
>					}
>				for(y=0;y<a;y++)
>				printf("%d\t %d\n",y+1,m[y]);
>				}
>				
>		void f(int i){
>					int j,x,s[1000],z[1000];
>					while(k[i-2]<=k[i-1])
>						{for(j=0;j<n;j++)
>						printf("%d ",k[j]);
>						printf("\n");
>						count++;
>						if(i!=2&&k[i-3]<=k[i-2]-2)
>							{for(j=0;j<i;j++)
>							s[j]=k[j];
>							k[i-3]++;k[i-2]--;
>							f(i-1);
>							for(j=0;j<i;j++)
>							k[j]=s[j];
>							}
>						k[i-1]--;k[i-2]++;
>						}
>					if(i==2)
>					return;
>					while(k[i-1]>=1)
>						{
>						for(j=0;j<i;j++)
>						z[j]=k[j];
>						x=k[i-2];k[i-2]=k[i-1];
>						k[i-3]+=(x-k[i-2]);
>						f(i-1);
>						for(j=0;j<i;j++)
>						k[j]=z[j];
>						k[j-1]--;k[j-2]++;
>						}
>					}


>程序2：（更快的只要求结果的）

>		#include<stdio.h>
>		int k[10000],i;
>		void f(int , int);
>
>		void main(){int a;
>			printf("input a number:");
>			scanf("%d",&a);
>			k[0]=1;
>			for(i=1;i<=a;i++){
>				k[i]=0;
>				f(i,i);}
>			for(i=1;i<=a;i++)
>			printf("%d\t %d\n",i,k[i]);
>			} 
>		void f(int n, int max)
>			{int m;
>			m=n;
>			do {if(n>max){
>				f(n-max,max);n=max-1;}
>				else{
>					if(m<=2*n)
>						{k[i]+=k[m-n];
>						n--;
>						}
>					else {f(m-n,n);n--;
>						}
>					}
>				}
>				while(n>0);
>			}