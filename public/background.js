const allResourceTypes = Object.values(chrome.declarativeNetRequest.ResourceType);

chrome.runtime.onInstalled.addListener(() => {
  console.log('has been installed, wow')

  chrome.storage.local.onChanged.addListener(({ testing, ...more }) => {
    console.log('testing -->', testing)
    console.log('more -->', more)

    const rule = {
      id: 1,
      priority: 1,
      action: {
        type: chrome.declarativeNetRequest.RuleActionType.MODIFY_HEADERS,
        requestHeaders: [
          {
            operation: chrome.declarativeNetRequest.HeaderOperation.SET,
            header: 'x-test-request-header',
            value: testing?.newValue ?? testing?.oldValue ?? '',
          },
        ]
      },
      condition: {
        urlFilter: '/returnHeaders',
        resourceTypes: allResourceTypes,
      }
    }

    chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [rule.id], // remove existing rules
      addRules: [rule],
    });

    console.log('a', chrome.action)

    // active badge
    chrome.action.setBadgeText({ text: '1' });
    chrome.action?.setBadgeTextColor?.({ color: '#000' }) // available from chrome 110
    chrome.action.setBadgeBackgroundColor({ color: '#9688F1' })
  })
})
