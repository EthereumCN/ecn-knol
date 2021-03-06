---
path: transaction
id: 19
title: 交易
description: 以太坊交易
date: 2020-06-28T02:15:01.762Z
author: ECN
---


## Gas

<br/>

### 概述

理解“gas”的概念是理解以太网络工作原理的基础。

以太坊虚拟机\(environment virtual machine，简称EVM\)，是模拟的计算机系统，在每个以太坊节点上运行。VirtualBox软件，就是一种常见的非区块链虚拟机，可以在物理硬件\(主\)上模拟计算机系统\(客\)。在EVM上的任何操作都要访问磁盘，都会消耗主机的CPU周期与内存（需要一定成本）。以太坊上的“gas”费用其实就是用来支付这些成本的。

为了防止主机“过载”，EVM上的每个操作都要消耗一定量的gas。访问内存或向磁盘写入数据的成本不同，每个EVM操作者对执行智能合约期间消耗的gas值设置上限。因此，如果恶意操作者精心设计一个智能合约，并使其进入无限执行循环，每次循环将消耗一些gas，gas最终达到上限时，EVM将中止执行该智能合约。实际上，合约越复杂，执行的操作越多，运行成本就越高。

这就形成了一个使用gas价格支付的费用市场，用户决定自己愿意为每单位gas支付的金额。由于设有gas区块限值，收费市场就几乎总是决定资源配置，即决定了哪些订单交易将会被优先验证，因为矿工为了寻求利润，会选择收费最高的交易进行验证。

以下概念对于理解交易尤为重要：

🤩 Gas：                     所完成计算量的单位

🤪 Gas价格：             用户愿意支付的每单位gas的费用\(以gwei为单位\)

😲 交易费用：            使用的Gas量\* Gas价格

😗 Gas限值：             为特定交易支付的最高gas费用

🎃 Gas区块限值：     一个区块允许使用的gas上限

<hr/>

## 费用市场

<br/>

### 概述

以太坊gas区块限值是指每个区块可以进行的计算量的极限。这形成了一个gas费用市场，矿工将优先选择验证交易费用更高的交易。若希望自己的交易优先被验证，可以支付更高的gas费用。

费用市场涉及的主要概念如下:

🥳 最低gas安全费用：            能确保在合理时间内交易能被验证的最低gas价格

😍 标准gas价格：                    平均gas价格

🤗 快速gas价格：                    在几个区块生成所需时间内交易能被验证的gas价格

## 在以太坊上签署交易

<br/>

### 通过Etherscan和MetaMask与智能合约交互

<br/>

1. 导航至Etherscan上能查询合同地址的页面
2. 如果代码和ABI已经上传到Etherscan，就应该能够访问“Write Contract\(编写合同\)”选项卡
3. 单击连接MetaMask按钮
4. 按照合同作者提供的文件完成交易

<br/>

### 通过MyCrypto与智能契约交互

<br/>

1. 导航至MyCrypto网页，验证SSL \(URL旁边的小绿锁\)以避免打开了钓鱼网站。
2. 点击“Contracts\(合同\)”选项卡
3. 在“Contract Address\(合同地址\)”栏中输入指定所需以太坊地址，在“Contract ABI\(合同ABI\)”栏中输入合同作者提供的“ABI / JSON接口”。ABI帮助MyCrypto发挥指定功能，提供的合约地址不可调用这些功能。有时可在Etherscan上查询合约地址的页面，点击“Contract\(合同\)”选项卡找到这些合约的代码。
4. 点击“访问”
5. 根据合约作者提供的合约文档，在“Read / Write Contract\(读/写合同\)”下拉菜单中选择使用所需的合约功能。
6. 按照MyCrypto提示访问自己的钱包，以便签署和提交交易。

<br/>

#### 重要注意事项

🌼 如果遇到麻烦，请确保正在使用右上角下拉菜单中的“Ethereum\(以太坊主网\)”。

☘ 在Etherscan或EthGasStation上相互对照平均gas限值和gas价格是没有坏处的。

<hr/>

## 如何通过MyCrypto进行离线交易

要了解如何通过MyCrypto在本地和离线生成、签署和传播交易，请参阅[本指南](https://support.mycrypto.com/how-to/sending/how-to-make-an-offline-transaction)。

<hr/>

## 在以太坊上签署和验证消息

以太坊私钥可用于签署消息。签名可用于验证给定用户是否拥有以太坊地址。

要了解如何通过MyCrypto签署和验证签名，请参阅[本指南](https://support.mycrypto.com/addresses/signing-and-verifying-messages.html)。

## 其他资源

[EthGasStation](https://ethgasstation.info/)





