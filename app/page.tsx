"use client";

type TableSection = {
  title: string;
  type?: never;
  fields?: string[];
  extraFields?: string[];
  extraGroups?: Array<{
    title: string;
    fields: string[];
  }>;
  checkboxGroups?: Array<{
    title: string;
    options: string[];
  }>;
  conflictDetail?: boolean;
};

type CheckboxSection = {
  title: string;
  type: "checkbox-group";
  options: string[];
  extraField: string;
};

type Section = TableSection | CheckboxSection;

const sections: Section[] = [
  {
    title: "一、孩子基础信息",
    fields: [
      "孩子昵称/姓名",
      "出生年月",
      "当前年龄（月龄）",
      "性别",
      "是否上幼儿园",
      "幼儿园类型（公立/私立/国际）",
      "当前班级（小班/中班）",
      "家庭常住成员",
      "平时主要照顾者",
    ],
  },
  {
    title: "二、孩子性格与气质评估",
    type: "checkbox-group",
    options: [
      "外向主动",
      "慢热谨慎",
      "情绪敏感",
      "独立性强",
      "黏人",
      "好奇心强",
      "倔强",
      "爱表达",
      "自尊心强",
      "胆小",
      "精力旺盛",
      "容易放弃",
    ],
    extraField: "请描述孩子最明显的性格特点",
  },
  {
    title: "三、情绪与行为情况",
    fields: [
      "是否容易哭闹",
      "是否容易发脾气",
      "发脾气频率",
      "情绪恢复速度",
      "是否容易焦虑",
      "是否特别黏人",
      "是否容易害羞",
      "是否会攻击他人",
      "是否会摔东西",
      "是否会大喊尖叫",
    ],
    extraFields: ["最容易崩溃的场景（非常重要）", "家长目前通常如何处理？"],
  },
  {
    title: "四、家庭教育环境",
    fields: [
      "谁更严格",
      "谁更容易心软",
      "是否经常意见不一致",
      "是否会吼孩子",
      "是否打过孩子",
      "是否冷暴力/不理孩子",
      "是否经常讲道理",
      "是否容易情绪失控",
    ],
    extraGroups: [
      {
        title: "老人参与情况",
        fields: [
          "是否老人长期带娃",
          "是否存在溺爱",
          "是否与父母教育冲突",
          "最大冲突点是什么",
        ],
      },
      {
        title: "家庭整体氛围",
        fields: [
          "家里是否经常争吵",
          "父母工作是否忙碌",
          "每天高质量陪伴时间",
          "孩子最依赖谁",
          "家庭氛围（轻松/紧张）",
        ],
      },
    ],
  },
  {
    title: "五、生活习惯与作息",
    fields: [
      "起床时间",
      "午睡时间",
      "晚上睡觉时间",
      "是否容易入睡困难",
      "是否夜醒",
      "睡眠总时长",
    ],
    extraGroups: [
      {
        title: "饮食情况",
        fields: [
          "是否挑食",
          "是否追着喂饭",
          "是否边看屏幕边吃",
          "是否偏爱零食",
          "吃饭时长",
        ],
      },
      {
        title: "屏幕使用情况（重点）",
        fields: [
          "每天使用时长",
          "常看内容",
          "是否沉迷",
          "不给是否哭闹",
          "是否影响睡觉",
          "是否边吃边看",
        ],
      },
    ],
  },
  {
    title: "六、能力发展情况",
    fields: ["是否表达清楚", "是否喜欢聊天提问", "是否能讲完整故事", "是否口齿清晰"],
    extraGroups: [
      {
        title: "专注力情况",
        fields: ["绘本能坚持多久", "玩玩具专注多久", "是否容易分心", "是否坐不住"],
      },
      {
        title: "自理能力",
        fields: ["自己吃饭", "穿衣服", "收玩具", "刷牙", "上厕所", "洗手"],
      },
      {
        title: "社交能力",
        fields: ["是否主动交朋友", "是否容易抢玩具", "是否愿意分享", "是否害怕陌生人", "是否能轮流等待"],
      },
    ],
  },
  {
    title: "七、学习与兴趣发展",
    fields: ["当前兴趣爱好"],
    checkboxGroups: [
      {
        title: "当前是否报班",
        options: ["英语", "运动", "美术", "音乐", "思维训练", "其他"],
      },
      {
        title: "家长最看重哪些能力（选五项）",
        options: [
          "情绪稳定",
          "自信",
          "听话守规矩",
          "独立性",
          "学习能力",
          "专注力",
          "社交能力",
          "创造力",
          "抗挫折能力",
          "表达能力",
        ],
      },
    ],
  },
  {
    title: "八、当前最头疼的问题（请按严重程度排序，1最严重）",
    fields: [
      "哭闹",
      "发脾气",
      "不听话",
      "拖延磨蹭",
      "沉迷电子产品",
      "打人",
      "顶嘴",
      "不愿睡觉",
      "不爱吃饭",
      "胆小社恐",
      "注意力差",
      "其他",
    ],
    conflictDetail: true,
  },
  {
    title: "九、父母教育目标",
    fields: ["最希望孩子未来成为怎样的人", "最担心孩子未来出现什么问题"],
  },
  {
    title: "十、家庭教育资源现实情况",
    fields: [
      "父母每天可陪伴时间",
      "是否双职工",
      "是否长期加班",
      "是否有老人帮忙",
      "家庭教育预算",
      "是否能长期坚持执行计划",
    ],
  },
];

const referenceText = `
填写前请认真阅读：

1. 请填写“常态”，不要只写极端情况。
2. 重点描述稳定性、情绪影响、提醒需求。
3. 不要使用“懒”“故意”“太作”等成人标签。
4. 观察重点是发展趋势，而不是单次表现。
5. 建议不同家庭成员分别填写后对比分析。
`;

function renderTable(fields: string[]) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[680px] border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="w-1/3 border p-4 text-left">项目</th>
            <th className="border p-4 text-left">填写内容</th>
          </tr>
        </thead>

        <tbody>
          {fields.map((field) => (
            <tr key={field}>
              <td className="border p-4 align-top font-medium">{field}</td>
              <td className="border p-3">
                <textarea
                  className="min-h-20 w-full rounded-lg border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-black"
                  placeholder="请按照填写标准描述..."
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ChildEducationFormApp() {
  const exportDoc = () => {
    const content = document.getElementById("form-content");

    if (!content) return;

    const html = `
      <html>
      <head>
        <meta charset="utf-8" />
        <title>4岁儿童家庭教育信息采集表</title>
      </head>
      <body>
        ${content.innerHTML}
      </body>
      </html>
    `;

    const blob = new Blob([html], { type: "application/msword" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "4岁儿童家庭教育信息采集表.doc";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl">
        <div className="bg-black p-8 text-white">
          <h1 className="mb-2 text-3xl font-bold">4岁儿童家庭教育信息采集表</h1>
          <p className="text-gray-300">中国家庭版 · 家庭成员统一填写系统</p>
        </div>

        <section className="border-b bg-yellow-50 p-8">
          <h2 className="mb-4 text-2xl font-bold">填写前请先阅读填写标准</h2>

          <div className="whitespace-pre-wrap rounded-2xl border bg-white p-6 leading-8 text-gray-700">
            {referenceText}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <input id="agree" type="checkbox" className="h-5 w-5" />
            <label htmlFor="agree" className="font-medium">
              我已阅读并理解填写标准
            </label>
          </div>
        </section>

        <div id="form-content" className="space-y-10 p-8">
          {sections.map((section) => (
            <section key={section.title} className="overflow-hidden rounded-2xl border bg-white">
              <div className="bg-gray-900 px-6 py-4 text-xl font-bold text-white">
                {section.title}
              </div>

              {"type" in section && section.type === "checkbox-group" ? (
                <div className="space-y-6 p-6">
                  <div className="grid gap-4 md:grid-cols-3">
                    {section.options.map((item) => (
                      <label
                        key={item}
                        className="flex cursor-pointer items-center gap-3 rounded-xl border p-4 hover:bg-gray-50"
                      >
                        <input type="checkbox" className="h-5 w-5" />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>

                  <div>
                    <div className="mb-2 font-semibold">{section.extraField}</div>

                    <textarea
                      className="min-h-36 w-full rounded-2xl border border-gray-300 p-4 outline-none focus:ring-2 focus:ring-black"
                      placeholder="请描述孩子最明显的性格特点..."
                    />
                  </div>
                </div>
              ) : (
                <div>
                  {section.fields ? renderTable(section.fields) : null}

                  {section.extraFields ? (
                    <div className="space-y-6 border-t bg-gray-50 p-6">
                      {section.extraFields.map((item) => (
                        <div key={item}>
                          <div className="mb-2 text-lg font-semibold">{item}</div>

                          <textarea
                            className="min-h-40 w-full rounded-2xl border border-gray-300 p-4 outline-none focus:ring-2 focus:ring-black"
                            placeholder="请尽量描述真实场景、频率、诱因等..."
                          />
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {section.checkboxGroups ? (
                    <div className="space-y-8 border-t bg-gray-50 p-6">
                      {section.checkboxGroups.map((group) => (
                        <div key={group.title}>
                          <div className="mb-4 text-lg font-bold">{group.title}</div>

                          <div className="grid gap-4 md:grid-cols-3">
                            {group.options.map((option) => (
                              <label
                                key={option}
                                className="flex cursor-pointer items-center gap-3 rounded-xl border bg-white p-4 hover:bg-gray-50"
                              >
                                <input type="checkbox" className="h-5 w-5" />
                                <span>{option}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {section.extraGroups ? (
                    <div className="space-y-8 border-t bg-gray-50 p-6">
                      {section.extraGroups.map((group) => (
                        <div key={group.title} className="space-y-4">
                          <div className="text-2xl font-bold">{group.title}</div>
                          {renderTable(group.fields)}
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {section.conflictDetail ? (
                    <div className="space-y-6 border-t bg-gray-50 p-6">
                      <div className="text-2xl font-bold">请详细描述最近一次典型冲突</div>

                      <div>
                        <label htmlFor="conflict-time" className="mb-2 block font-semibold">
                          时间：
                        </label>
                        <input
                          id="conflict-time"
                          className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:ring-2 focus:ring-black"
                          placeholder="例如：晚上睡觉前"
                        />
                      </div>

                      <div>
                        <label htmlFor="conflict-event" className="mb-2 block font-semibold">
                          发生了什么：
                        </label>
                        <textarea
                          id="conflict-event"
                          className="min-h-40 w-full rounded-2xl border border-gray-300 p-4 outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>

                      <div>
                        <label htmlFor="conflict-parent-action" className="mb-2 block font-semibold">
                          家长如何处理：
                        </label>
                        <textarea
                          id="conflict-parent-action"
                          className="min-h-40 w-full rounded-2xl border border-gray-300 p-4 outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>

                      <div>
                        <label htmlFor="conflict-result" className="mb-2 block font-semibold">
                          结果：
                        </label>
                        <textarea
                          id="conflict-result"
                          className="min-h-32 w-full rounded-2xl border border-gray-300 p-4 outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              )}
            </section>
          ))}

          <section className="overflow-hidden rounded-2xl border bg-white">
            <div className="bg-gray-900 px-6 py-4 text-xl font-bold text-white">
              十一、补充说明（自由填写）
            </div>

            <div className="p-6">
              <textarea
                className="min-h-60 w-full rounded-2xl border border-gray-300 p-4 outline-none focus:ring-2 focus:ring-black"
                placeholder="请填写希望额外补充的家庭情况、教育困扰等..."
              />
            </div>
          </section>
        </div>

        <div className="sticky bottom-0 flex items-center justify-between gap-4 border-t bg-white p-6">
          <div className="text-sm text-gray-500">建议家庭不同成员分别填写后进行对比分析</div>

          <button
            type="button"
            onClick={exportDoc}
            className="rounded-2xl bg-black px-8 py-4 text-lg font-semibold text-white transition hover:opacity-90"
          >
            导出填写结果为 Word 文档
          </button>
        </div>
      </div>
    </main>
  );
}