import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as i,o as e}from"./app-BKqV070P.js";const l={};function p(d,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h1 id="栈帧" tabindex="-1"><a class="header-anchor" href="#栈帧"><span>栈帧</span></a></h1><h2 id="栈" tabindex="-1"><a class="header-anchor" href="#栈"><span>栈</span></a></h2><p>从技术上来说，栈就是CPU寄存器里的某个指针所指向的一片内存区域。 栈在进程中的作用如下：</p><ul><li>暂时保存函数内的局部变量</li><li>调用函数时传递参数</li><li>保存函数返回的地址</li></ul><h2 id="栈帧-1" tabindex="-1"><a class="header-anchor" href="#栈帧-1"><span>栈帧</span></a></h2><p>栈帧也叫过程活动记录，是编译器用来实现过程/函数调用的一种数据结构。简言之，栈帧就是利用EBP（栈帧指针）寄存器访问局部变量、参数、函数返回地址等的手段。 每一次函数的调用，都会在调用栈（call stack）上维护一个独立的栈帧（stack frame）。每个独立的栈帧一般包括：</p><ul><li>函数的返回地址和参数</li><li>临时变量：包括函数的非静态局部变量以及编译器自动生成的其他临时变量</li><li>函数调用的上下文</li></ul><p>栈是从高地址向低地址延伸，一个函数的栈帧用EBP和ESP这两个寄存器来获取范围。EBP指向当前栈帧的底部，ESP始终指向栈帧的顶部。</p><ul><li>EBP寄存器又被称为帧指针（Frame Pointer）</li><li>ESP寄存器又被称为栈指针（Stack Pointer）</li></ul><p>栈帧结构图整体如下图所示：</p><h2 id="函数调用的汇编过程" tabindex="-1"><a class="header-anchor" href="#函数调用的汇编过程"><span>函数调用的汇编过程</span></a></h2><p>通过一段代码来解析</p><div class="language-c++ line-numbers-mode" data-highlighter="shiki" data-ext="c++" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">#include</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &lt;stdio.h&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">	int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> c </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> a</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">b;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">	return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> c;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">	int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> a;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">	int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> b;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">	int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ret;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	a </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 16</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	b </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 64</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	ret </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(a, b);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">	return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在vs2008上依次点击debug-&gt;window-&gt;Diassembly，即可看到函数调用的汇编代码。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>int add(int a, int b)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>00F013A0  push        ebp                      保存调用add函数前的ebp             </span></span>
<span class="line"><span>00F013A1  mov         ebp,esp                  把调用add函数前的esp(栈顶)作为add函数的栈帧基址ebp</span></span>
<span class="line"><span>00F013A3  sub         esp,0CCh                 CC即为192字节间隔空间+add内局部变量所占空间，给局部变量c分配空间并保持12字节对齐</span></span>
<span class="line"><span>00F013A9  push        ebx                      ebx进栈 </span></span>
<span class="line"><span>00F013AA  push        esi                      esi进栈</span></span>
<span class="line"><span>00F013AB  push        edi                      edi进栈</span></span>
<span class="line"><span>00F013AC  lea         edi,[ebp-0CCh]           以下四条代码将cc字节空间置为0CCCCCCCCh</span></span>
<span class="line"><span>00F013B2  mov         ecx,33h </span></span>
<span class="line"><span>00F013B7  mov         eax,0CCCCCCCCh </span></span>
<span class="line"><span>00F013BC  rep stos    dword ptr es:[edi] </span></span>
<span class="line"><span>	int c = a+b;</span></span>
<span class="line"><span>00F013BE  mov         eax,dword ptr [a]        将a的值赋给eax</span></span>
<span class="line"><span>00F013C1  add         eax,dword ptr [b]        将b的值累加到eax</span></span>
<span class="line"><span>00F013C4  mov         dword ptr [c],eax        将eax的值赋给c</span></span>
<span class="line"><span>	return c;</span></span>
<span class="line"><span>00F013C7  mov         eax,dword ptr [c]        返回值放入eax</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>00F013CA  pop         edi  </span></span>
<span class="line"><span>00F013CB  pop         esi  </span></span>
<span class="line"><span>00F013CC  pop         ebx  </span></span>
<span class="line"><span>00F013CD  mov         esp,ebp </span></span>
<span class="line"><span>00F013CF  pop         ebp  </span></span>
<span class="line"><span>00F013D0  ret</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>00F01400  push        ebp                      保存调用main函数前的ebp</span></span>
<span class="line"><span>00F01401  mov         ebp,esp                  把调用main函数前的esp(栈顶)作为main函数的栈帧基址ebp</span></span>
<span class="line"><span>00F01403  sub         esp,0E4h                 E4=192字节间隔地址+3个局部变量*12 </span></span>
<span class="line"><span>00F01409  push        ebx                      ebx进栈</span></span>
<span class="line"><span>00F0140A  push        esi                      esi进栈</span></span>
<span class="line"><span>00F0140B  push        edi                      edi进栈</span></span>
<span class="line"><span>00F0140C  lea         edi,[ebp-0E4h]           以下四条代码将E4字节空间置为0CCCCCCCCh</span></span>
<span class="line"><span>00F01412  mov         ecx,39h </span></span>
<span class="line"><span>00F01417  mov         eax,0CCCCCCCCh </span></span>
<span class="line"><span>00F0141C  rep stos    dword ptr es:[edi] </span></span>
<span class="line"><span>	int a;</span></span>
<span class="line"><span>	int b;</span></span>
<span class="line"><span>	int ret;</span></span>
<span class="line"><span>	a = 16;</span></span>
<span class="line"><span>00F0141E  mov         dword ptr [a],10h        a赋值为16</span></span>
<span class="line"><span>	b = 64;</span></span>
<span class="line"><span>00F01425  mov         dword ptr [b],40h        b赋值为64</span></span>
<span class="line"><span>	ret = add(a, b);</span></span>
<span class="line"><span>00F0142C  mov         eax,dword ptr [b]        参数b入栈</span></span>
<span class="line"><span>00F0142F  push        eax  </span></span>
<span class="line"><span>00F01430  mov         ecx,dword ptr [a]        参数a入栈</span></span>
<span class="line"><span>00F01433  push        ecx  </span></span>
<span class="line"><span>00F01434  call        add (0F011DBh)           调用add函数</span></span>
<span class="line"><span>00F01439  add         esp,8                    等价于参数出栈，int a和int b加起来8字节</span></span>
<span class="line"><span>00F0143C  mov         dword ptr [ret],eax      函数返回值赋给ret</span></span>
<span class="line"><span>	return 0;</span></span>
<span class="line"><span>00F0143F  xor         eax,eax </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>00F01441  pop         edi  </span></span>
<span class="line"><span>00F01442  pop         esi  </span></span>
<span class="line"><span>00F01443  pop         ebx  </span></span>
<span class="line"><span>00F01444  add         esp,0E4h </span></span>
<span class="line"><span>00F0144A  cmp         ebp,esp </span></span>
<span class="line"><span>00F0144C  call        @ILT+315(__RTC_CheckEsp) (0F01140h) </span></span>
<span class="line"><span>00F01451  mov         esp,ebp </span></span>
<span class="line"><span>00F01453  pop         ebp  </span></span>
<span class="line"><span>00F01454  ret</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>call指令主要实现压栈和跳转，上面的call指令可以理解为两个指令：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>push 00F01439</span></span>
<span class="line"><span>jmp add</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是，首先把call指令的下一条指令地址作为本次函数调用的返回地址压栈，然后使用jmp指令修改指令指针寄存器EIP，使cpu执行swap函数的指令代码。</p>`,19)]))}const c=n(l,[["render",p]]),h=JSON.parse('{"path":"/Study/CPP%E7%9B%B8%E5%85%B3/%E6%A0%88%E5%B8%A7.html","title":"栈帧","lang":"zh-CN","frontmatter":{"description":"栈帧 栈 从技术上来说，栈就是CPU寄存器里的某个指针所指向的一片内存区域。 栈在进程中的作用如下： 暂时保存函数内的局部变量 调用函数时传递参数 保存函数返回的地址 栈帧 栈帧也叫过程活动记录，是编译器用来实现过程/函数调用的一种数据结构。简言之，栈帧就是利用EBP（栈帧指针）寄存器访问局部变量、参数、函数返回地址等的手段。 每一次函数的调用，都会在...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"栈帧\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-05-24T18:50:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"灰灰烟影\\",\\"url\\":\\"http://hugo.work\\"}]}"],["meta",{"property":"og:url","content":"http://hugo.work/Study/CPP%E7%9B%B8%E5%85%B3/%E6%A0%88%E5%B8%A7.html"}],["meta",{"property":"og:site_name","content":"灰灰烟影"}],["meta",{"property":"og:title","content":"栈帧"}],["meta",{"property":"og:description","content":"栈帧 栈 从技术上来说，栈就是CPU寄存器里的某个指针所指向的一片内存区域。 栈在进程中的作用如下： 暂时保存函数内的局部变量 调用函数时传递参数 保存函数返回的地址 栈帧 栈帧也叫过程活动记录，是编译器用来实现过程/函数调用的一种数据结构。简言之，栈帧就是利用EBP（栈帧指针）寄存器访问局部变量、参数、函数返回地址等的手段。 每一次函数的调用，都会在..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-05-24T18:50:03.000Z"}],["meta",{"property":"article:modified_time","content":"2025-05-24T18:50:03.000Z"}]]},"git":{"createdTime":1656344265000,"updatedTime":1748112603000,"contributors":[{"name":"HooYing","username":"HooYing","email":"1161844396@qq.com","commits":3,"url":"https://github.com/HooYing"}]},"readingTime":{"minutes":3.22,"words":966},"filePathRelative":"Study/CPP相关/栈帧.md","excerpt":"","autoDesc":true}');export{c as comp,h as data};
