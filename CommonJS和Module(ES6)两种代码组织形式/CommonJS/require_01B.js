/**
 * @file   : require_01.js
 * @time   : 10:33
 * @date   : 2022/4/1
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

const a = module.require("./exports_01.js");
console.log(a);
a.foo();